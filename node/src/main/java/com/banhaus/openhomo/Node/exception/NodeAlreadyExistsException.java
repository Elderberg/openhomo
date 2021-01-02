package com.banhaus.openhomo.Node.exception;

import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.http.HttpStatus;

public class NodeAlreadyExistsException extends OpenHomoCheckedException {

    public NodeAlreadyExistsException() {
        super("Node already exists!", HttpStatus.CONFLICT);
    }
}
