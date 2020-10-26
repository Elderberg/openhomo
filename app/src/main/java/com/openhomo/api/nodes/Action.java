package com.openhomo.api.nodes;

public class Action {
    private final String id;
    private final String type;
    private final String value;

    public Action(String id, String type, String value) {
        this.id = id;
        this.type = type;
        this.value = value;
    }

    public String getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getValue() {
        return value;
    }
}
