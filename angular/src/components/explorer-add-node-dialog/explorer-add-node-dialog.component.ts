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
import {EMPTY, throwError} from 'rxjs';
import {HttpResponse} from '@angular/common/http.js';
import {AjaxResponse} from 'rxjs/ajax';

@Component({
  selector: 'add-node-dialog',
  templateUrl: './explorer-add-node-dialog.component.html',
  styleUrls: ['./explorer-add-node-dialog.component.scss']
})
export class ExplorerAddNodeDialogComponent implements OnInit {

  rooms: Room[] = []

  nodeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    roomId: new FormControl('', [Validators.required]),
    resources: new FormArray([]),
    actions: new FormArray([])
  })

  roomForm = new FormGroup({
    name: new  FormControl('', [Validators.required]),
    description: new  FormControl('')
  })

  constructor(@Inject(MAT_DIALOG_DATA) public node: Node, private dialog: MatDialog, private snackBar: MatSnackBar,
              private helper: ExplorerHelperService, private roomsService: ExplorerRoomsService,
              private nodesService: ExplorerNodesService) { }

  get resourcesForm() {
    return this.nodeForm.get('resources') as FormArray;
  }
  get actionsForm() {
    return this.nodeForm.get('actions') as FormArray;
  }

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    });

    this.initResources();
    this.initActions();
  }

  initResources = () => {
    if (!this.node.resources) {return;}
    this.node.resources.forEach(() => {
      this.resourcesForm.push(new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('')
      }));
    });
  }

  initActions = () => {
    if (!this.node.actions) {return;}
    this.node.actions.forEach(() => {
      this.actionsForm.push(new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('')
      }));
    });
  }

  addNode = () => {
    if (this.nodeForm.value.roomId === 'newRoom' && this.roomForm.value.name && this.nodeForm.valid && this.roomForm.valid) {
      this.roomsService.postRoom(this.roomForm.value).pipe(switchMap((response: Response) => {
        return response.status === 201 ? this.nodesService.postNode(this.helper.mergeObjects(this.node, this.nodeForm.value)) : throwError(response);
      }), catchError((err: Response) => {
        this.snackBar.open('Error!', '', {duration: 3000}) && console.error('Error! Received unexpected response: ' + err.status);
        return EMPTY;
      })).subscribe((response: Response) => {
        response.status === 201 ? this.snackBar.open('Success!', '', {duration: 3000}) : this.snackBar.open('Error!', '', {duration: 3000}) && console.error('Error! Received unexpected response: ' + response.status);
      });
    } else if (this.nodeForm.value.roomId && this.nodeForm.value.roomId !== 'newRoom' && this.nodeForm.valid) {
      this.nodesService.postNode(this.helper.mergeObjects(this.node, this.nodeForm.value)).subscribe((response: Response) => {
        response.status === 201 ? this.dialog.closeAll() : this.snackBar.open('Error!', '', {duration: 3000}) && console.error('Error! Received unexpected response: ' + response.status);
      })
    } else {
      this.snackBar.open('Error!', '', {duration: 3000}) && console.error('Unknown Error!');
    }
  }

}
