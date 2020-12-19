package com.openhomo.api.nodes;

import org.springframework.data.annotation.Id;

import java.sql.Timestamp;
import java.util.ArrayList;

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


    public Node(String id, String name, String description, String roomId, int state, int power, ArrayList<String> resourceIds, ArrayList<String> actionIds) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.roomId = roomId;
        this.state = state;
        this.power = power;
        this.resourceIds = resourceIds;
        this.actionIds = actionIds;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getRoomId() {
        return roomId;
    }

    public int getState() {
        return state;
    }

    public int getPower() {
        return power;
    }

    public ArrayList<String> getResourceIds() {
        return resourceIds;
    }

    public ArrayList<String> getActionIds() {
        return actionIds;
    }
}
