package com.banhaus.openhomo.SimpleNode.controller.rest;

import com.banhaus.openhomo.SimpleNode.model.SimpleNode;
import com.banhaus.openhomo.SimpleNode.service.SimpleNodeService;
import com.banhaus.openhomo.WaitingList.service.WaitingListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SimpleNodeController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleNodeController.class);

    private final SimpleNodeService simpleNodeService;
    private final WaitingListService waitingListService;

    @Autowired
    SimpleNodeController(SimpleNodeService simpleNodeService, WaitingListService waitingListService) {
        this.simpleNodeService = simpleNodeService;
        this.waitingListService = waitingListService;
    }

    @PostMapping(value = "/api/simpleNode", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SimpleNode> check(@RequestBody SimpleNode simpleNode) {
        if (simpleNodeService.check(simpleNode.getId())) {
            simpleNodeService.add(simpleNode);
        } else {
            waitingListService.update(simpleNode);
        }
    return ResponseEntity.ok(simpleNode);
    }
}
