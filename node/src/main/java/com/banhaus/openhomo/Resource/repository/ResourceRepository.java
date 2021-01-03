package com.banhaus.openhomo.Resource.repository;

import com.banhaus.openhomo.Resource.model.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResourceRepository extends MongoRepository<Resource, String> {

}
