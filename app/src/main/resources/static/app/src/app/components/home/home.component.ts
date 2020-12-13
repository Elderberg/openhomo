import { Component, OnInit } from '@angular/core';
import {Node} from "../../objects/Node";
import {NodeService} from "../../services/node.service";
import {ResourceTypes} from "../../pipes/resourceTypes.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nodeList: Node[];
  resourceTypes = ResourceTypes;

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.getNodes().subscribe((nodes: Node[] )=> {
      this.nodeList = nodes;
    })
  }

  deleteNode = (id) => {
    this.nodeService.deleteNode(id).subscribe(response => {
      response.status !== 200 ? console.log(`Error! Response: ${response.status}`) : ''
    });
  }

}
