package com.openhomo.api.db.repositories;

import com.openhomo.api.nodes.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResourcesRepository extends MongoRepository<Resource, String> {
}
