package com.banhaus.openhomo.Resource.exception;

import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.http.HttpStatus;

public class ResourceAlreadyExistsException extends OpenHomoCheckedException {

    public ResourceAlreadyExistsException() {
        super("Resource already exists!", HttpStatus.CONFLICT);
    }
}
