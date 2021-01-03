package com.banhaus.openhomo.Room.service;

import com.banhaus.openhomo.Node.exception.NodeAlreadyExistsException;
import com.banhaus.openhomo.Node.model.Node;
import com.banhaus.openhomo.Room.model.Room;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;

import java.util.Collection;

public interface RoomService {

    Room add(Room room) throws OpenHomoCheckedException;

    Collection<Room> findAll();
}
