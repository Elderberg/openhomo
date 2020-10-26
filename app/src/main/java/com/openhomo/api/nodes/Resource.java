package com.openhomo.api.nodes;

public class Resource {
    private final String id;
    private final String type;
    private final double value;

    public Resource(String id, String type, double value) {
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

    public double getValue() {
        return value;
    }
}
