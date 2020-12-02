import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDialogModule,
    MatExpansionModule

  ], exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDialogModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
