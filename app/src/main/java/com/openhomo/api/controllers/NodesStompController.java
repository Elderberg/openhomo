package com.openhomo.api.controllers;

import com.openhomo.api.nodes.Action;
import com.openhomo.api.nodes.Node;
import com.openhomo.api.nodes.Resource;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class NodesStompController {

    @MessageMapping("/hello")
    @SendTo("/topic")
    public Node sendNodes(ResponseBody object) {
        System.out.println(object);
        return new Node(object + "dg", 100, 100, "fuk", "jooo", "dgf", new Resource[3], new Action[3]);
    }

}
