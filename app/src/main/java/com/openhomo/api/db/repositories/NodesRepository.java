package com.openhomo.api.db.repositories;

import com.openhomo.api.nodes.Node;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NodesRepository extends MongoRepository<Node, String> {
}
