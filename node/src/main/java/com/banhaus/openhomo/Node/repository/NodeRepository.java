package com.banhaus.openhomo.Node.repository;

import com.banhaus.openhomo.Node.model.Node;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NodeRepository extends MongoRepository<Node, String> {

}
