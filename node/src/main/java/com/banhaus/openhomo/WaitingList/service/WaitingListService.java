package com.banhaus.openhomo.WaitingList.service;

import com.banhaus.openhomo.SimpleNode.model.SimpleNode;

import java.util.Collection;

public interface WaitingListService {

    SimpleNode update(SimpleNode simpleNode);

    Collection<SimpleNode> getWaitingList();

    void removeSimpleNode(String id);
}
