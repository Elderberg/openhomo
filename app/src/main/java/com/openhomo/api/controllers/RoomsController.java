package com.openhomo.api.controllers;

import com.openhomo.api.db.repositories.RoomsRepository;
import com.openhomo.api.rooms.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class RoomsController {

    @Autowired
    RoomsRepository roomsRepository;


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/rooms", produces = "application/json")
    public ResponseEntity<?> getRooms() {
        return new ResponseEntity<>(roomsRepository.findAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/rooms/{id}", produces = "application/json")
    public ResponseEntity<?> getRoomById(@PathVariable String id) {
        return new ResponseEntity<>(roomsRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "api/rooms", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Room> addRoom(@RequestBody Room room) {
        UUID uuid = UUID.randomUUID();
        room.setId(uuid.toString());
        roomsRepository.save(room);
        return new ResponseEntity<Room>(room, HttpStatus.CREATED);
    }
}
