package com.openhomo.api.nodes;

import org.springframework.data.annotation.Id;

public class Resource {
    @Id
    private final String id;
    private final String name;
    private final String description;
    private final String type;
    private Double value;

    public Resource(String id, String name, String description, String type) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.value = null;
    }

    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
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

    public void setValue(Double value) {

        this.value = value;
    }
}
