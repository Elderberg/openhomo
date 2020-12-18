package com.openhomo.api.rooms;

import org.springframework.data.annotation.Id;

public class Room {
    @Id
    private String id;
    private final String name;
    private final String description;

    public Room(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
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

    public void setId(String id) {
        this.id = id;
    }
}
