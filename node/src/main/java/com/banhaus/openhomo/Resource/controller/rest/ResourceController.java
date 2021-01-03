package com.banhaus.openhomo.Resource.controller.rest;

import com.banhaus.openhomo.Resource.model.Resource;
import com.banhaus.openhomo.Resource.service.ResourceService;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ResourceController {
    private final ResourceService resourceService;

    @Autowired
    ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping(value = "/api/resource", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> get() throws OpenHomoCheckedException {
        return (ResponseEntity<?>) ResponseEntity.badRequest();
    }

    @PostMapping(value = "/api/resource", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Resource[]> add(@RequestBody Resource[] resources) throws OpenHomoCheckedException {
    return ResponseEntity.ok(resourceService.add(resources));
    }
}
