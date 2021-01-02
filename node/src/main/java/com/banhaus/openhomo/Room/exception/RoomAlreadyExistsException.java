package com.banhaus.openhomo.Room.exception;

import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.http.HttpStatus;

public class RoomAlreadyExistsException extends OpenHomoCheckedException {

    public RoomAlreadyExistsException() {
        super("Room already exists!", HttpStatus.CONFLICT);
    }
}
