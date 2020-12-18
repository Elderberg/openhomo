package com.openhomo.api.controllers;

import com.openhomo.api.db.repositories.NodesRepository;
import com.openhomo.api.nodes.Action;
import com.openhomo.api.nodes.Node;
import com.openhomo.api.nodes.Resource;
import org.bson.types.ObjectId;
import org.influxdb.InfluxDB;
import org.influxdb.InfluxDBFactory;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;
import org.influxdb.dto.Pong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.*;
import java.util.concurrent.TimeUnit;

@RestController
public class NodesController {

    @Autowired
    private SimpMessagingTemplate webSocket;

    @Autowired
    private NodesRepository nodesRepository;

    @Autowired
    private InfluxDB influxDB;

    private HashMap<String, Node> unregisteredNodes = new HashMap();




    @PutMapping(path = "/api/nodes", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> updateNode(@RequestBody Node node) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        node.setTimestamp(timestamp.getTime());

        if (nodesRepository.findById(node.getId()).isPresent()) {
            System.out.println("Node is already in Database");
            unregisteredNodes.remove(node.getId());

            Long timestamp_db = System.currentTimeMillis();
            BatchPoints batchPoints = BatchPoints.database("nodes").build();

            for(Resource resource : node.getResources()) {
                batchPoints.point(
                        Point.measurement(node.getId())
                                .time(timestamp_db, TimeUnit.MILLISECONDS)
                                .addField(resource.getId(), resource.getValue())
                                .build()
                );

                webSocket.convertAndSend("/ws/nodes/resources", resource);
            }

            for(Action action : emptyIfNull(node.getActions())) {
                batchPoints.point(
                        Point.measurement(node.getId())
                                .time(timestamp_db, TimeUnit.MILLISECONDS)
                                .addField(action.getId(), action.getValue())
                                .build()
                );
            }

            influxDB.write(batchPoints);






        } else {
            updateUnregistered(node);
            webSocket.convertAndSend("/ws/nodes/unregistered", node);
        }




        return new ResponseEntity<Node>(node, HttpStatus.OK);
    };

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/nodes", produces = "application/json")
    public ResponseEntity<?> getNodes() {


        return new ResponseEntity<>(nodesRepository.findAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/nodes/{id}", produces = "application/json")
    public ResponseEntity<?> getNodeById(@PathVariable String id) {
        return new ResponseEntity<>(nodesRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "api/nodes", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Node> addNode(@RequestBody Node node) {
        nodesRepository.save(node);
        unregisteredNodes.remove(node.getId());

        Long timestamp = System.currentTimeMillis();
        BatchPoints batchPoints = BatchPoints.database("nodes").build();

        System.out.println();


        for(Resource resource : emptyIfNull(node.getResources())) {
            batchPoints.point(
                    Point.measurement(node.getId())
                            .time(timestamp, TimeUnit.MILLISECONDS)
                            .addField(resource.getId(), resource.getValue())
                            .build()
            );
        }

        for(Action action : emptyIfNull(node.getActions())) {
            batchPoints.point(
                    Point.measurement(node.getId())
                            .time(timestamp, TimeUnit.MILLISECONDS)
                            .addField(action.getId(), action.getValue())
                            .build()
            );
        }

        influxDB.write(batchPoints);

        return new ResponseEntity<Node>(node, HttpStatus.CREATED);
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping(path = "api/nodes/unregistered", produces = "application/json")
    public ResponseEntity<?> getUnregisteredNodes() {
        return new ResponseEntity<>(unregisteredNodes.values().toArray(), HttpStatus.OK);
    }

    @CrossOrigin("http://localhost:4200")
    @DeleteMapping(path = "api/nodes/{id}", produces = "application/json")
    public ResponseEntity<?> deleteNode(@PathVariable String id) {
        nodesRepository.deleteById(id);
        System.out.println(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private void updateUnregistered(Node node) {
        unregisteredNodes.put(node.getId(), node);
    }

    public static <T> Iterable<T> emptyIfNull(Iterable<T> iterable) {
        return iterable == null ? Collections.<T>emptyList() : iterable;
    }
}
