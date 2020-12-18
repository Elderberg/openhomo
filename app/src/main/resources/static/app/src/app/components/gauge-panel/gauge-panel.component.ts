import {AfterViewInit, Component, OnInit, OnChanges} from '@angular/core';
import {Node} from "../../objects/Node";
import {NodeService} from "../../services/node.service";
import {ResourcesService} from "../../services/resources.service";
import {RoomService} from "../../services/room.service";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-gauge-panel',
  templateUrl: './gauge-panel.component.html',
  styleUrls: ['./gauge-panel.component.css']
})
export class GaugePanelComponent implements OnInit, AfterViewInit {

  nodes: Node[];

  view = 'map';


  viewCounter = newArray(5);

  resources = new Map();
  resourceIds = [];
  rooms = new Map<String, any>();

  chartData = [];

  constructor(private nodeService: NodeService, private resourcesService: ResourcesService, private roomService: RoomService) {}




  ngOnInit(): void {


    this.nodeService.getNodes().subscribe((nodes: Node[]) => {
      this.nodes = nodes;

      nodes.forEach((node) => {
        node.resources.forEach((resource: any) => {
          this.resourceIds.length > 6 ? this.resourceIds.push(resource.id) : '';
          this.resources.set(resource.id, resource);
        })
      })
      this.chartData = this.createChartData()
    })

    this.roomService.getRooms().subscribe((rooms: any) => {
      rooms.forEach((room) => {
        this.rooms.set(room.id, room)
      })
    })


    this.resourcesService.connectResources().subscribe((message) => {
      let resource = JSON.parse(message.body);
      this.resources.set(resource.id, resource)
      this.chartData = this.createChartData()
    })

  }



  ngAfterViewInit(): void {
    // setInterval(() => {
    //   this.chartData = this.createChartData()
    //   console.log(this.chartData)
    // }, 10000)
  }


  createChartData = (): any => {
    let chartData = [];
    this.resources.forEach((value, key, map) => {
      if (chartData.length >= 5) return;
      chartData.push({
        category: key,
        type: value.type,
        value: value.value,
        full: 100
      })
    })
    return chartData;
  }


}
