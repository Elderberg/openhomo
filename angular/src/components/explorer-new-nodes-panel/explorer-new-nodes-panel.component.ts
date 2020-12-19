import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ExplorerAddNodeDialogComponent} from '../explorer-add-node-dialog/explorer-add-node-dialog.component';

import {Node} from '../../classes/Node.class';
import {ResourceTypes} from '../../classes/ResourceTypes.enum';
import {ExplorerNodesService} from '../../services/explorer-nodes.service';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'new-nodes-panel',
  templateUrl: './explorer-new-nodes-panel.component.html',
  styleUrls: ['./explorer-new-nodes-panel.component.scss'],
})
export class ExplorerNewNodesPanelComponent implements OnInit {
  @Input() drawer: MatDrawer;

  nodeList: Node[];
  resourceTypes: typeof ResourceTypes = ResourceTypes;

  currentTime: Date = new Date();

  constructor(private dialog: MatDialog, private nodesService: ExplorerNodesService) { }

  ngOnInit(): void {
    this.nodesService.getNewNodes().subscribe((data: Node[]) => {
      this.nodeList = data;
      console.log(data)
    })

    this.nodesService.stompNewNodes().subscribe((message ) => {
      console.log('Message came')
      this.nodeList.forEach((node: Node, index) => {
        console.log(message)
        if (node.id !== JSON.parse(message.body).id) return;
        this.nodeList[index] = JSON.parse(message.body);
      })

      console.log(this.nodeList)
    })

    setInterval(() => {
      this.currentTime = new Date();
    },1000)
  }

  addNode(node: Node): void {
    const dialogRef = this.dialog.open(ExplorerAddNodeDialogComponent, {
      data: node
    });

    // reloads unregistered list after successful adding
    dialogRef.afterClosed().subscribe(() => {
      this.nodesService.getNewNodes().subscribe((data: Node[]) => {
        this.nodeList = data;
      })
    });
  }
}
