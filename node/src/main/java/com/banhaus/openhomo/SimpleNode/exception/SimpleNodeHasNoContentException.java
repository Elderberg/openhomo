package com.banhaus.openhomo.SimpleNode.exception;

import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class SimpleNodeHasNoContentException extends OpenHomoCheckedException {
    private final HttpStatus httpStatus;
    private final String detailMessage;

    public SimpleNodeHasNoContentException() {
        super("SimpleNode has no content", HttpStatus.BAD_REQUEST);
        this.httpStatus = HttpStatus.CONFLICT;
        this.detailMessage = "Please ehlme me im ored";
    }
}
