package com.banhaus.openhomo.Node.service;

import com.banhaus.openhomo.Node.exception.NodeAlreadyExistsException;
import com.banhaus.openhomo.Node.model.Node;
import com.banhaus.openhomo.Node.repository.NodeRepository;
import com.banhaus.openhomo.Room.exception.RoomAlreadyExistsException;
import com.banhaus.openhomo.Room.repository.RoomRepository;
import com.banhaus.openhomo.SimpleNode.service.SimpleNodeServiceImpl;
import com.banhaus.openhomo.WaitingList.service.WaitingListService;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NodeServiceImpl implements NodeService {
    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleNodeServiceImpl.class);

    private final NodeRepository nodeRepository;
    private final RoomRepository roomRepository;
    private final WaitingListService waitingListService;

    @Autowired
    NodeServiceImpl(NodeRepository nodeRepository, RoomRepository roomRepository, WaitingListService waitingListService) {
        this.nodeRepository = nodeRepository;
        this.roomRepository = roomRepository;
        this.waitingListService = waitingListService;
    }

    public Node add(Node node) throws OpenHomoCheckedException {
        if (nodeRepository.existsById(node.getId())) {
            throw new NodeAlreadyExistsException();
        }

        if (roomRepository.existsById(node.getId())) {
            throw new RoomAlreadyExistsException();
        }

        waitingListService.removeSimpleNode(node.getId());
        nodeRepository.save(node);
        LOGGER.info("Added node with id {} to database.", node.getId());
        return node;
    }
}
