package com.banhaus.openhomo.Node.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
public class Node {
    @Id
    private final String id;
    private final String name;
    private final String description;
    private final String roomId;
    private final int state;
    private final int power;
    private final ArrayList<String> resourceIds;
    private final ArrayList<String> actionIds;
}
