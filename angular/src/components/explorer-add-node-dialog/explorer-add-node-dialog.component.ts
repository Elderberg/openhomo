import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Node} from '../../classes/Node.class.js';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ExplorerHelperService} from '../../services/explorer-helper.service.js';
import {ExplorerRoomsService} from '../../services/explorer-rooms.service.js';
import {ExplorerNodesService} from '../../services/explorer-nodes.service.js';
import {catchError, switchMap} from 'rxjs/operators';
import {Room} from '../../classes/Room.class.js';
import {EMPTY} from 'rxjs';
import {ExplorerResourceService} from '../../services/explorer-resource.service.js';
import {Resource} from '../../classes/Resource.class.js';

@Component({
  selector: 'add-node-dialog',
  templateUrl: './explorer-add-node-dialog.component.html',
  styleUrls: ['./explorer-add-node-dialog.component.scss']
})
export class ExplorerAddNodeDialogComponent implements OnInit {

  modifiedNode: Node = new Node();
  rooms: Room[] = []

  nodeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    roomId: new FormControl('', [Validators.required]),
  })

  roomForm = new FormGroup({
    name: new  FormControl('', [Validators.required]),
    description: new  FormControl('')
  })

  resourcesForm = new FormGroup({resources: new FormArray([])})
  actionsForm = new FormGroup({actions: new FormArray([])})

  constructor(@Inject(MAT_DIALOG_DATA) public node: Node, private dialog: MatDialog, private snackBar: MatSnackBar,
              private helper: ExplorerHelperService, private roomsService: ExplorerRoomsService,
              private nodesService: ExplorerNodesService, private resourceService: ExplorerResourceService) { }

  get resourcesFormArray() {
    return this.resourcesForm.get('resources') as FormArray;
  }
  get actionsFormArray() {
    return this.actionsForm.get('actions') as FormArray;
  }

  ngOnInit(): void {
    this.modifiedNode.id = this.node.id;
    this.modifiedNode.state = this.node.state;
    this.modifiedNode.power = this.node.power;

    this.roomsService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    });

    this.initResources();
    this.initActions();
  }

  initResources = () => {
    this.modifiedNode.resourceIds = []
    if (!this.node.resources) {return;}
    this.node.resources.forEach((resource) => {
      this.modifiedNode.resourceIds.push(resource.id)
      this.resourcesFormArray.push(new FormGroup({
        id: new FormControl(resource.id, [Validators.required]),
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        type: new FormControl(resource.type)
      }));
    });
  }

  initActions = () => {
    this.modifiedNode.actionIds = []
    if (!this.node.actions) {return;}
    this.node.actions.forEach((action) => {
      this.modifiedNode.actionIds.push(action.id)
      this.actionsFormArray.push(new FormGroup({
        id: new FormControl(action.id, [Validators.required]),
        name: new FormControl('', [Validators.required]),
        description: new FormControl('')
      }));
    });
  }

  addNode = () => {
    if (this.nodeForm.value.roomId === 'new_&Room' && this.roomForm.value.name) {
      this.createNodeWithRoom();
    } else if (this.nodeForm.value.roomId && this.nodeForm.value.roomId !== 'new_&Room') {
      this.createNode();
    } else {
      this.snackBar.open('Error!', '', {duration: 3000}) && console.error('Unknown Error!');
    }
    this.createResources();
  }

  createNode = () => {
    this.nodesService.postNode(this.helper.mergeObjects(this.modifiedNode, this.nodeForm.value))
      .subscribe((response: Response) => {
        if (response.status === 201) {
          this.snackBar.open('Success!', '', {duration: 3000});
          this.dialog.closeAll();
        } else {
          this.snackBar.open('Error!', '', {duration: 3000});
          console.error('Error! Received unexpected response: ' + response.status);
        }
      })
  }

  createNodeWithRoom = () => {
    this.roomsService.postRoom(this.roomForm.value).pipe(switchMap((response: Response) => {
      // @ts-ignore
      this.nodeForm.value.roomId = response.body.id;
      return this.nodesService.postNode(this.helper.mergeObjects(this.modifiedNode, this.nodeForm.value)).pipe(catchError(err => {
        this.snackBar.open('Error!', '', {duration: 3000});
        console.error('Error!' + err);
        return EMPTY;
      }));
    }));
  }

  createResources = () => {
    let resources: Resource[] = []

    this.resourcesForm.value.resources.forEach((resource: Resource) => {
      if (resource.name) {
        resources.push(resource)
      }
    })
    if (resources.length > 0) {
      this.resourceService.postResources(resources).subscribe(response => {
        if (response.status === 201) {
          this.snackBar.open('Success!', '', {duration: 3000});
          this.dialog.closeAll();
        } else {
          this.snackBar.open('Error!', '', {duration: 3000});
          console.error('Error! Received unexpected response: ' + response.status);
        }
      })
    }
  }

}
