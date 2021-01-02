package com.banhaus.openhomo.Room.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;


@Getter
@Setter
@AllArgsConstructor
public class Room {
    @Id
    private final String id;
    private final String name;
    private final String description;
}
