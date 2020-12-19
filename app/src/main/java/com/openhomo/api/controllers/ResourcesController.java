package com.openhomo.api.controllers;

import com.openhomo.api.db.repositories.ResourcesRepository;
import com.openhomo.api.nodes.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ResourcesController {

    @Autowired
    ResourcesRepository resourcesRepository;


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/resources", produces = "application/json")
    public ResponseEntity<?> getResources() {
        return new ResponseEntity<>(resourcesRepository.findAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "api/resources/{id}", produces = "application/json")
    public ResponseEntity<?> getResourcesById(@PathVariable String id) {
        return new ResponseEntity<>(resourcesRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "api/resources", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Resource[]> addResource(@RequestBody Resource[] resources) {
        for (Resource resource : resources) {
            resourcesRepository.save(resource);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
