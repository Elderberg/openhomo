package com.banhaus.openhomo.Room.repository;

import com.banhaus.openhomo.Room.model.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, String> {

}
