package com.openhomo.api.controllers;

import com.openhomo.api.db.repositories.NodesRepository;
import com.openhomo.api.nodes.Node;
import com.openhomo.api.nodes.RawNode;
import com.openhomo.api.services.RawNodeService;
import com.openhomo.api.services.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NodesController {

    @Autowired
    private NodeService nodeService;

    @Autowired
    private RawNodeService rawNodeService;

    @Autowired
    private NodesRepository nodesRepository;


    @PutMapping(path = "/api/nodes", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> updateNodeData(@RequestBody RawNode rawNode) {
        rawNodeService.update(rawNode);
        return new ResponseEntity<>(HttpStatus.OK);
    };

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/nodes", produces = "application/json")
    public ResponseEntity<?> getNodes() {
        return new ResponseEntity<>(nodesRepository.findAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/nodes/{id}", produces = "application/json")
    public ResponseEntity<?> getNodeById(@PathVariable String id) {
        return new ResponseEntity<>(nodesRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "api/nodes", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Node> addNode(@RequestBody Node node) throws Exception {
        rawNodeService.removeFromUnregistered(node.getId());
        return new ResponseEntity<Node>(nodeService.addNode(node), HttpStatus.CREATED);
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping(path = "api/nodes/unregistered", produces = "application/json")
    public ResponseEntity<?> getUnregisteredNodes() {
        return new ResponseEntity<>(rawNodeService.getUnregistered(), HttpStatus.OK);
    }

    @CrossOrigin("http://localhost:4200")
    @DeleteMapping(path = "api/nodes/{id}", produces = "application/json")
    public ResponseEntity<?> deleteNode(@PathVariable String id) {
        nodesRepository.deleteById(id);
        System.out.println(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
