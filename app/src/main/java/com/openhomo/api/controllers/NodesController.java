package com.openhomo.api.controllers;

import com.openhomo.api.nodes.Action;
import com.openhomo.api.nodes.Node;
import com.openhomo.api.nodes.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NodesController {

    @PutMapping(path = "/api/nodes", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> checkNode(@RequestBody Node node) {
        System.out.println(node.getState());
        return new ResponseEntity<Node>(node, HttpStatus.OK);
    };

    @GetMapping(path = "api/nodes", produces = "application/json")
    public ResponseEntity<?> getNodes() {
        Resource resource1 = new Resource("885076b7-5085-4618-a7ca-c92aebb91348", "temp", 21.2);
        Resource resource2 = new Resource("1947c044-3d5e-4ec0-918f-19f9ceff6918", "press", 1033);
        Resource resource3 = new Resource("289cc52e-4acf-4161-93aa-b549e3b4f7d9", "humid", 73.20);

        Resource[] resources = new Resource[3];
        resources[0] = resource1;
        resources[1] = resource2;
        resources[2] = resource3;

        Action actions1 = new Action("e235640d-6e67-485a-b44c-1cfaef6fcaa8", "switch", "off");
        Action actions2 = new Action("7312dedc-75da-4d99-b5af-3e2c2a19dc9a", "therm", "25");
        Action actions3 = new Action("63a01fee-d2e8-4032-8c3a-6f990f624326", "rotate", "180");

        Action[] actions = new Action[3];
        actions[0] = actions1;
        actions[1] = actions2;
        actions[2] = actions3;


        Node node = new Node(
                "315327d0-d195-474d-a86b-9a615ba40249",
                100,
                80,
                "Test Node",
                "Coole Beschreinung",
                "0ca68913-7484-4623-8b65-4561f886ae15",
                resources, actions);
        return new ResponseEntity<>(node, HttpStatus.OK);
    }
}
