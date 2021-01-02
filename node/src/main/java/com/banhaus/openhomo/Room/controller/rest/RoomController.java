package com.banhaus.openhomo.Room.controller.rest;

import com.banhaus.openhomo.Room.model.Room;
import com.banhaus.openhomo.Room.service.RoomService;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {
    private final RoomService roomService;

    @Autowired
    RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping(value = "/api/room", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Room> add(@RequestBody Room room) throws OpenHomoCheckedException {
        roomService.add(room);
    return ResponseEntity.ok(room);
    }
}
