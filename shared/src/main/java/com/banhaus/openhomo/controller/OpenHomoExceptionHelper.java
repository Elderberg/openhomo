package com.banhaus.openhomo.controller;

import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class OpenHomoExceptionHelper {

    @ExceptionHandler({OpenHomoCheckedException.class})
    public ResponseEntity<Object> handleCheckedException(final OpenHomoCheckedException e) {
        return new ResponseEntity<>(e.getMessage(),e.getHttpStatus());
    }

}
