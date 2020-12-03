import { Component, OnInit} from '@angular/core';
import {UnregisteredService} from "../../services/unregistered.service";

import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {ResourceTypes} from "../../pipes/resourceTypes.enum";
import {AddNodeDialogComponent} from "./add-node-dialog/add-node-dialog.component";

@Component({
  selector: 'app-unregistered',
  templateUrl: './unregistered.component.html',
  styleUrls: ['./unregistered.component.css']
})
export class UnregisteredComponent implements OnInit {

  nodeList;
  resourceTypes = ResourceTypes;

  constructor(private unregistered: UnregisteredService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.unregistered.initNodeList();
    this.unregistered.connect();
    this.unregistered.getNodeList().subscribe(nodes => {
      this.nodeList = nodes;
    })
  }

  addNode(node): void {
    const dialogRef = this.dialog.open(AddNodeDialogComponent, {
      data: node
    });

    dialogRef.afterClosed().subscribe(() => this.unregistered.initNodeList());
  }


}
