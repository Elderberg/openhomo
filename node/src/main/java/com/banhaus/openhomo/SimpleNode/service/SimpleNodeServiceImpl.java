package com.banhaus.openhomo.SimpleNode.service;

import com.banhaus.openhomo.Node.repository.NodeRepository;
import com.banhaus.openhomo.SimpleNode.model.SimpleAction;
import com.banhaus.openhomo.SimpleNode.model.SimpleNode;
import com.banhaus.openhomo.SimpleNode.model.SimpleResource;
import org.influxdb.InfluxDB;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import java.util.concurrent.TimeUnit;

@Service
public class SimpleNodeServiceImpl implements SimpleNodeService {
    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleNodeServiceImpl.class);

    private final NodeRepository nodeRepository;
    private final InfluxDB influxDB;
    private SimpMessagingTemplate webSocket;

    @Autowired
    SimpleNodeServiceImpl(NodeRepository nodeRepository, InfluxDB influxDB, SimpMessagingTemplate webSocket) {
        this.nodeRepository = nodeRepository;
        this.influxDB = influxDB;
        this.webSocket = webSocket;
    }

    public boolean check(String id) {
        return  nodeRepository.existsById(id);
    }

    public void add(SimpleNode simpleNode) {
        BatchPoints batchPoints = BatchPoints.database("nodes").build();
        if (simpleNode.getResources() != null) {
            for (SimpleResource resource : simpleNode.getResources()) {
                batchPoints.point(
                        Point.measurement(resource.getId())
                                .time(simpleNode.getTimestamp(), TimeUnit.MILLISECONDS)
                                .addField("value", resource.getValue())
                                .build()
                );
                webSocket.convertAndSend("/ws/resource", resource);
            }
        }
        if (simpleNode.getActions() != null) {
            for (SimpleAction action : simpleNode.getActions()) {
                batchPoints.point(
                        Point.measurement(action.getId())
                                .time(simpleNode.getTimestamp(), TimeUnit.MILLISECONDS)
                                .addField("value", action.getValue())
                                .build()
                );
            }
        }
        influxDB.write(batchPoints);
        LOGGER.info("Datapoint added to timeseries");
    }
}
