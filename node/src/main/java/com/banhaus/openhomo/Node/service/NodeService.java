package com.banhaus.openhomo.Node.service;

import com.banhaus.openhomo.Node.exception.NodeAlreadyExistsException;
import com.banhaus.openhomo.Node.model.Node;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;

public interface NodeService {

    Node add(Node node) throws OpenHomoCheckedException;
}
