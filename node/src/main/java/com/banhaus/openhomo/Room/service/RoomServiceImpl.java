package com.banhaus.openhomo.Room.service;

import com.banhaus.openhomo.Room.exception.RoomAlreadyExistsException;
import com.banhaus.openhomo.Room.model.Room;
import com.banhaus.openhomo.Room.repository.RoomRepository;
import com.banhaus.openhomo.SimpleNode.service.SimpleNodeServiceImpl;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class RoomServiceImpl implements RoomService {
    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleNodeServiceImpl.class);

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
        LOGGER.info("Added room with id {} to database.", room.getId());
        return room;
    }

    public Collection<Room> findAll() {
        return roomRepository.findAll();
    }
}
