import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ExplorerAddNodeDialogComponent} from '../explorer-add-node-dialog/explorer-add-node-dialog.component';

import {Node} from '../../classes/Node.class';
import {ResourceTypes} from '../../classes/ResourceTypes.enum';
import {ExplorerNodesService} from '../../services/explorer-nodes.service';

@Component({
  selector: 'new-nodes-panel',
  templateUrl: './explorer-new-nodes-panel.component.html',
  styleUrls: ['./explorer-new-nodes-panel.component.scss']
})
export class ExplorerNewNodesPanelComponent implements OnInit {

  nodeList: Node[];
  resourceTypes: typeof ResourceTypes = ResourceTypes;

  constructor(private dialog: MatDialog, private nodesService: ExplorerNodesService) { }

  ngOnInit(): void {
    this.nodesService.getNewNodes().subscribe((data: Node[]) => {
      this.nodeList = data;
      console.log(data)
    })
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
