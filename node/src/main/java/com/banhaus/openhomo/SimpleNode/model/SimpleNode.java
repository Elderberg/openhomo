package com.banhaus.openhomo.SimpleNode.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
public class SimpleNode {
    private String id;
    private int state;
    private int power;
    private long timestamp;
    private ArrayList<SimpleResource> resources;
    private ArrayList<SimpleAction> actions;
}
