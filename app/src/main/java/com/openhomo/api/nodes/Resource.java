package com.openhomo.api.nodes;

public class Resource {
    private final String id;
    private final String type;
    private double value;

    private String parentId;

    public Resource(String id, String type, double value, String parentId) {
        this.id = id;
        this.type = type;
        this.value = value;
        this.parentId = parentId;
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
    public void setValue(double value) {

        this.value = value;
    }



    public String getParentId() {
        return parentId;
    }
    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

}
