package com.openhomo.api.nodes;

import java.sql.Timestamp;
import java.util.ArrayList;

public class RawNode {
    private final String id;
    private final int state;
    private final int power;
    private final long timestamp;
    private final ArrayList<Resource> resources;
    private final ArrayList<Action> actions;

    public RawNode(String id, int state, int power, ArrayList<Resource> resources, ArrayList<Action> actions) {
        this.id = id;
        this.state = state;
        this.power = power;
        this.timestamp = new Timestamp(System.currentTimeMillis()).getTime();
        this.resources = resources;
        this.actions = actions;
    }

    public String getId() {
        return id;
    }

    public int getState() {
        return state;
    }

    public int getPower() {
        return power;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public ArrayList<Resource> getResources() {
        return resources;
    }

    public ArrayList<Action> getActions() {
        return actions;
    }
}
