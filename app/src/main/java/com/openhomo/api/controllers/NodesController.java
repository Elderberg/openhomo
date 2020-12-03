package com.openhomo.api.controllers;

import com.openhomo.api.nodes.Action;
import com.openhomo.api.nodes.Node;
import com.openhomo.api.nodes.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.*;

@RestController
public class NodesController {

    @Autowired
    private SimpMessagingTemplate webSocket;

    private HashMap<String, Node> unregisteredNodes = new HashMap();


    @PutMapping(path = "/api/nodes", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> checkNode(@RequestBody Node node) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        node.setTimestamp(timestamp.getTime());
        updateUnregistered(node);
        webSocket.convertAndSend("/ws/nodes/unregistered", node);
        return new ResponseEntity<Node>(node, HttpStatus.OK);
    };

    @GetMapping(path = "api/nodes", produces = "application/json")
    public ResponseEntity<?> getNodes() {
        Resource[] resources = new Resource[3];
        resources[0] = new Resource("885076b7-5085-4618-a7ca-c92aebb91348", "temp", 21.2);
        resources[1] = new Resource("1947c044-3d5e-4ec0-918f-19f9ceff6918", "press", 1033);
        resources[2] = new Resource("289cc52e-4acf-4161-93aa-b549e3b4f7d9", "humid", 73.20);

        Action[] actions = new Action[3];
        actions[0] = new Action("e235640d-6e67-485a-b44c-1cfaef6fcaa8", "switch", "off");
        actions[1] = new Action("7312dedc-75da-4d99-b5af-3e2c2a19dc9a", "therm", "25");
        actions[2] = new Action("63a01fee-d2e8-4032-8c3a-6f990f624326", "rotate", "180");


        Node node = new Node(
                "315327d0-d195-474d-a86b-9a615ba40249",
                100,
                80,
                "Test Node",
                "Coole Beschreinung",
                "0ca68913-7484-4623-8b65-4561f886ae15",
                resources, actions);
        return new ResponseEntity<>(node, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "api/nodes/add", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Node> addNewNode(@RequestBody Node node) {
        return new ResponseEntity<Node>(node, HttpStatus.CREATED);
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping(path = "api/nodes/unregistered", produces = "application/json")
    public ResponseEntity<?> getUnregisteredNodes() {
        return new ResponseEntity<>(unregisteredNodes.values().toArray(), HttpStatus.OK);
    }

    private void updateUnregistered(Node node) {
        unregisteredNodes.put(node.getId(), node);
    }
}
