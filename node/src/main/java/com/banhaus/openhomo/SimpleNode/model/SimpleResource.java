package com.banhaus.openhomo.SimpleNode.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SimpleResource {
    private String id;
    private String type;
    private double value;
}
