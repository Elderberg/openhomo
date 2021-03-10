import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import {ResourceTypes} from '../../classes/ResourceTypes.enum';
import {ExplorerRoomsService} from '../../services/explorer-rooms.service';
import {ExplorerNodesService} from '../../services/explorer-nodes.service';
@Component({
  selector: 'node-list-panel',
  templateUrl: './explorer-node-list-panel.component.html',
  styleUrls: ['./explorer-node-list-panel.component.scss']
})
export class ExplorerNodeListPanelComponent implements OnInit {
  nodeList: Node[];
  resourceTypes = ResourceTypes

  rooms = new Map<String, any>();

  constructor(private nodeService: ExplorerNodesService, private roomService: ExplorerRoomsService) { }

  ngOnInit(): void {
    this.nodeService.getNodes().subscribe((nodes: Node[]) => {
      this.nodeList = nodes;
      console.log(nodes)

    })

    this.roomService.getRooms().subscribe((rooms: any) => {
      rooms.forEach((room: any) => {
        this.rooms.set(room.id, room)
        console.log(this.rooms)
      })
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
    }, 1000)

  }

  ngAfterViewChecked() {

  }

}
