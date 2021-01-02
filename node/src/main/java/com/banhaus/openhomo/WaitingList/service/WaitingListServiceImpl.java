package com.banhaus.openhomo.WaitingList.service;

import com.banhaus.openhomo.SimpleNode.model.SimpleNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;

@Service
public class WaitingListServiceImpl implements WaitingListService {
    private static final Logger LOGGER = LoggerFactory.getLogger(WaitingListServiceImpl.class);

    private HashMap<String, SimpleNode> waitingList = new HashMap<>();
    private SimpMessagingTemplate webSocket;

    @Autowired
    WaitingListServiceImpl(SimpMessagingTemplate webSocket) {
        this.webSocket = webSocket;
    }

    public SimpleNode update(SimpleNode simpleNode) {
        waitingList.put(simpleNode.getId(), simpleNode);
        webSocket.convertAndSend("/ws/waitingList", simpleNode);
        LOGGER.info("Updated waiting list.");
        return simpleNode;
    }

    public Collection<SimpleNode> getWaitingList() {
        return waitingList.values();
    }

    public void removeSimpleNode(String id) {
        waitingList.remove(id);
    }
}
