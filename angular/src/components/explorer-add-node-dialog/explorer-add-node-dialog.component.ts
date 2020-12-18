import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'add-node-dialog',
  templateUrl: './explorer-add-node-dialog.component.html',
  styleUrls: ['./explorer-add-node-dialog.component.scss']
})
export class ExplorerAddNodeDialogComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
