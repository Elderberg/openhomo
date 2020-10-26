package com.openhomo.api.controllers;

import com.openhomo.api.nodes.Node;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NodeController {

    @PutMapping(path = "/api/node", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> checkNode(@RequestBody Node node) {
        System.out.println(node.getState());
        return new ResponseEntity<Node>(node, HttpStatus.OK);
    };
}
