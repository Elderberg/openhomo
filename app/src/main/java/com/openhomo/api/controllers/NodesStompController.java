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

    @MessageMapping("/ws")
    @SendTo("/ws/nodes")
    public String sendNodes(String object) {
        System.out.println(object);
        return object;
    }

}
