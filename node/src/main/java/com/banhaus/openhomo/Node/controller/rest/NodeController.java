package com.banhaus.openhomo.Node.controller.rest;

import com.banhaus.openhomo.Node.model.Node;
import com.banhaus.openhomo.Node.service.NodeService;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NodeController {
    private final NodeService nodeService;

    @Autowired
    NodeController(NodeService nodeService) {
        this.nodeService = nodeService;
    }

    @PostMapping(value = "/api/node", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Node> add(@RequestBody Node node) throws OpenHomoCheckedException {
        nodeService.add(node);
    return ResponseEntity.ok(node);
    }
}
