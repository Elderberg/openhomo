package com.banhaus.openhomo.WaitingList.controller.rest;

import com.banhaus.openhomo.WaitingList.service.WaitingListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WaitingListController {
    private static final Logger LOGGER = LoggerFactory.getLogger(WaitingListController.class);

    private final WaitingListService waitingListService;

    @Autowired
    WaitingListController(WaitingListService waitingListService) {
        this.waitingListService = waitingListService;
    }

    @GetMapping(value = "/api/waitingList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getSimpleNodes() {
        LOGGER.info("Fetched waiting list.");
        return ResponseEntity.ok(waitingListService.getWaitingList().toArray());
    }
}
