package com.openhomo.api.nodes;

import java.sql.Timestamp;

public class Node {

    private final String id;
    private final int state;
    private final int power;
    private final String name;
    private final String description;
    private final String roomId;
    private static long timestamp;

    private final Resource[] resources;

    public Resource[] getResources() {
        return resources;
    }

    public Action[] getActions() {
        return actions;
    }

    private final Action[] actions;

    public Node(String id, int state, int power, String name, String description, String roomId, Resource[] resources, Action[] actions) {
        this.id = id;
        this.state = state;
        this.power = power;
        this.name = name;
        this.description = description;
        this.roomId = roomId;
        this.resources = resources;
        this.actions = actions;
    }

    public String getId() {
        return this.id;
    }

    public int getState() {
        return this.state;
    }

    public int getPower() {
        return power;
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

    public long getTimestamp() {
        return timestamp;
    }

    public long setTimestamp(long time) {
        return timestamp = time;
    }

}
