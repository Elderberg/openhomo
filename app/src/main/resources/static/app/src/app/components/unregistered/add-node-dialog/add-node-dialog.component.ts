import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Node} from "../../../objects/Node";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {NodeService} from "../../../services/node.service";
import {RoomService} from "../../../services/room.service";

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


  rooms = []

  constructor(@Inject(MAT_DIALOG_DATA) public nodeData: Node, private nodeService: NodeService, private roomService: RoomService, private dialog: MatDialog) {

    console.log(this.node)
  }




  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms: any) => {
      this.rooms = rooms;
    })

    this.getResources();
    this.getActions();
  }

  get resources() {
    return this.node.get('resources') as FormArray;
  }
  get actions() {
    return this.node.get('actions') as FormArray;
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
    if (this.node.value.roomId === 'newRoom' && this.room.value.name) {
      this.roomService.addRoom(this.room.value).subscribe((response: any) => {
        if (response.status === 201 && response.body.id) {
          this.node.value.roomId = response.body.id
          this.nodeService.addNode(this.mergeObjects(this.nodeData, this.node.value)).subscribe(response => {
            response.status === 201 ? this.dialog.closeAll() : console.log('Error! Received unexpected response: ' + response.status);
          })
        }
      })
    } else if (this.node.value.roomId && this.node.value.roomId !== 'newRoom') {
      this.nodeService.addNode(this.mergeObjects(this.nodeData, this.node.value)).subscribe(response => {
        response.status === 201 ? this.dialog.closeAll() : console.log('Error! Received unexpected response: ' + response.status);
      })
    } else {
      console.log('Error while adding Node!')
    }




  }


  debug = () => {
    console.log(this.node.value)
  }

}
