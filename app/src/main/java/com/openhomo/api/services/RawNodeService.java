package com.openhomo.api.services;

import com.openhomo.api.db.repositories.NodesRepository;
import com.openhomo.api.nodes.Action;
import com.openhomo.api.nodes.RawNode;
import com.openhomo.api.nodes.Resource;
import org.influxdb.InfluxDB;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.concurrent.TimeUnit;

@Service
public class RawNodeService {

    private HashMap<String, RawNode> unregisteredNodes = new HashMap();

    @Autowired
    private NodesRepository nodeRepo;

    @Autowired
    private InfluxDB influxDB;

    @Autowired
    private SimpMessagingTemplate webSocket;


    public void update(RawNode rawNode) {
        System.out.println(rawNode.getId());
        if (nodeRepo.findById(rawNode.getId()).isPresent()) {
            BatchPoints batchPoints = BatchPoints.database("nodes").build();
            if (rawNode.getResources() != null) {
                for (Resource resource : rawNode.getResources()) {
                    batchPoints.point(
                            Point.measurement(resource.getId())
                                    .time(rawNode.getTimestamp(), TimeUnit.MILLISECONDS)
                                    .addField("value", resource.getValue())
                                    .build()
                    );
                webSocket.convertAndSend("/ws/resources", resource);
                }
            }
            if (rawNode.getActions() != null) {
                for (Action action : rawNode.getActions()) {
                    batchPoints.point(
                            Point.measurement(action.getId())
                                    .time(rawNode.getTimestamp(), TimeUnit.MILLISECONDS)
                                    .addField("value", action.getValue())
                                    .build()
                    );
                }
            }
            influxDB.write(batchPoints);
        } else {
            unregisteredNodes.put(rawNode.getId(), rawNode);
            webSocket.convertAndSend("/ws/nodes/unregistered", rawNode);
        }
    }

    public void removeFromUnregistered(String id) {
        unregisteredNodes.remove(id);
    }

    public Object[] getUnregistered() {
        return unregisteredNodes.values().toArray();
    }

}
