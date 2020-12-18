import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import {NodeService} from "../../services/node.service";
import {Node} from "../../objects/Node";
import {ResourceTypes} from "../../pipes/resourceTypes.enum";
import {RoomService} from "../../services/room.service";
import {Resource} from "../../objects/Resource";

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements OnInit, AfterViewInit, AfterViewChecked {

  nodeList: Node[];
  resourceTypes = ResourceTypes;

  rooms = new Map<String, any>();

  constructor(private nodeService: NodeService, private roomService: RoomService) { }

  ngOnInit(): void {
    this.nodeService.getNodes().subscribe((nodes: Node[]) => {
      this.nodeList = nodes;

    })


    this.roomService.getRooms().subscribe((rooms: any) => {
      rooms.forEach((room) => {
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

  deleteNode = (id) => {
    this.nodeService.deleteNode(id).subscribe(response => {
      response.status !== 200 ? console.log(`Error! Response: ${response.status}`) : ''
    });
  }

}
