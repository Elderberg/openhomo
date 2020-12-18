package com.openhomo.api.db.repositories;

import com.openhomo.api.rooms.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomsRepository extends MongoRepository<Room, String> {
}
