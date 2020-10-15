package com.openhomo.api.nodes;

public class Node {

    private final String id;
    private final int state;

    public Node(String id, int state) {
        this.id = id;
        this.state = state;

    }

    public String getId() {
        return this.id;
    }

    public int getState() {
        return this.state;
    }
}
