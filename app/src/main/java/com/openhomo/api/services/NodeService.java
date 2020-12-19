package com.openhomo.api.services;
import com.openhomo.api.db.repositories.NodesRepository;
import com.openhomo.api.db.repositories.ResourcesRepository;
import com.openhomo.api.db.repositories.RoomsRepository;
import com.openhomo.api.nodes.Node;
import com.openhomo.api.nodes.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class NodeService {

    @Autowired
    private NodesRepository nodesRepo;

    @Autowired
    private RoomsRepository roomsRepo;

    public Node addNode(Node node) throws Exception {

        if (nodesRepo.findById(node.getId()).isPresent()) {
            throw new Exception("Node already present!" + node.getId());
        }

        if (roomsRepo.findById(node.getRoomId()).isEmpty()) {
            throw new Exception("No room with id: " + node.getRoomId() + " found!");
        }

        Node newNode = new Node(node.getId(), node.getName(), node.getDescription(), node.getRoomId(), node.getState(),
                node.getPower(), node.getResourceIds(), node.getActionIds());
        nodesRepo.save(newNode);

        return newNode;
    }

}
