package com.banhaus.openhomo.Resource.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@AllArgsConstructor
public class Resource {
    @Id
    private final String id;
    private final String name;
    private final String description;
}
