package com.openhomo.api.db.repositories;

import com.openhomo.api.nodes.Node;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NodesRepository extends MongoRepository<Node, String> {
    public List<Node> findByName(String name);
}
