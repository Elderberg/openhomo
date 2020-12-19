import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerGaugePanelComponent } from './components/explorer-gauge-panel/explorer-gauge-panel.component';
import { ExplorerNewNodesPanelComponent } from './components/explorer-new-nodes-panel/explorer-new-nodes-panel.component';
import { ExplorerDeleteDialogComponent } from './components/explorer-delete-dialog/explorer-delete-dialog.component';
import { ExplorerAddNodeDialogComponent } from './components/explorer-add-node-dialog/explorer-add-node-dialog.component';
import { ExplorerNodeListPanelComponent } from './components/explorer-node-list-panel/explorer-node-list-panel.component';
import { ExplorerNavHeaderPanelComponent } from './components/explorer-nav-header-panel/explorer-nav-header-panel.component';
import { MaterialModule } from './modules/material.module';
import { ExplorerSnackBarAlertComponent } from './components/explorer-snack-bar-alert/explorer-snack-bar-alert.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DateAgoPipe} from './pipes/dateAgo.pipe.js';



@NgModule({
  declarations: [
    ExplorerGaugePanelComponent,
    ExplorerNewNodesPanelComponent,
    ExplorerDeleteDialogComponent,
    ExplorerAddNodeDialogComponent,
    ExplorerNodeListPanelComponent,
    ExplorerNavHeaderPanelComponent,
    ExplorerSnackBarAlertComponent,
    DateAgoPipe
  ],
  exports: [
    ExplorerNavHeaderPanelComponent,
    ExplorerNodeListPanelComponent,
    ExplorerNewNodesPanelComponent,
    ExplorerGaugePanelComponent,
    ExplorerAddNodeDialogComponent,
    ExplorerDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
