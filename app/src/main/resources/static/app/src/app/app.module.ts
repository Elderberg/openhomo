import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from "@stomp/ng2-stompjs";
import {WebSocketConfig} from "./api/WebSocketConfig";
import { HttpClientModule } from '@angular/common/http';
import { UnregisteredComponent } from './components/unregistered/unregistered.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './components/home/home.component';
import { AddNodeDialogComponent } from './components/unregistered/add-node-dialog/add-node-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NodeListComponent } from './components/node-list/node-list.component';
import { GaugePanelComponent } from './components/gauge-panel/gauge-panel.component';
import { NodeMapComponent } from './components/node-map/node-map.component';


@NgModule({
  declarations: [
    AppComponent,
    UnregisteredComponent,
    HomeComponent,
    AddNodeDialogComponent,
    NodeListComponent,
    GaugePanelComponent,
    NodeMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: WebSocketConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddNodeDialogComponent
  ]
})
export class AppModule { }
