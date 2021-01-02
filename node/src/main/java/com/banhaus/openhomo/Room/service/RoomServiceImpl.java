package com.banhaus.openhomo.Room.service;

import com.banhaus.openhomo.Room.exception.RoomAlreadyExistsException;
import com.banhaus.openhomo.Room.model.Room;
import com.banhaus.openhomo.Room.repository.RoomRepository;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;

    @Autowired
    RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public Room add(Room room) throws OpenHomoCheckedException {
        if (roomRepository.existsById(room.getId())) {
            throw new RoomAlreadyExistsException();
        }

        roomRepository.save(room);
        return room;
    }
}
