import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Node} from "../../../objects/Node";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {NodeService} from "../../../services/node.service";

@Component({
  selector: 'app-add-node-dialog',
  templateUrl: './add-node-dialog.component.html',
  styleUrls: ['./add-node-dialog.component.css']
})
export class AddNodeDialogComponent implements OnInit {

  node = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    roomId: new FormControl('', [Validators.required]),
    resources: new FormArray([]),
    actions: new FormArray([])
  })

  room = new FormGroup({
    name: new  FormControl('', [Validators.required]),
    description: new  FormControl('')
  })


  rooms = [
    {name: 'Living Room', id: 'dfge54'},
    {name: 'Kitchen', id: 'dfge434454'},
    {name: 'Alex Room', id: 'dfdfdfge54'}
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public nodeData: Node, private nodeService: NodeService, private dialog: MatDialog) {
    this.getResources();
    this.getActions();
    console.log(this.node)
  }


  get resources() {
    return this.node.get('resources') as FormArray;
  }
  get actions() {
    return this.node.get('actions') as FormArray;
  }


  ngOnInit(): void {
  }

  getResources = () => {
    if (!this.nodeData.resources) {return;}
    this.nodeData.resources.forEach(() => {
      this.resources.push(new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('')
      }))
    })
  }

  getActions = () => {
    if (!this.nodeData.actions) {return;}
    this.nodeData.actions.forEach(() => {
      this.actions.push(new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('')
      }))
    })
  }


  mergeObjects = (target, source) => {
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object) Object.assign(source[key], this.mergeObjects(target[key], source[key]))
    }
    Object.assign(target || {}, source)
    return target
  }

  addNode = () => {
    this.nodeService.addNode(this.mergeObjects(this.nodeData, this.node.value)).subscribe(response => {
      response.status === 201 ? this.dialog.closeAll() : console.log('Error! Received unexpected response: ' + response.status);
    })

  }

}
