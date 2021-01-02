package com.banhaus.openhomo.exception;

import org.springframework.http.HttpStatus;
import javax.validation.constraints.NotNull;

public class OpenHomoCheckedException extends Exception{

    private final HttpStatus httpStatus;

    public OpenHomoCheckedException(@NotNull String message, @NotNull HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
