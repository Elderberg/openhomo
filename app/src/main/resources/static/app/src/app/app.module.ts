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

@NgModule({
  declarations: [
    AppComponent,
    UnregisteredComponent,
    HomeComponent,
    AddNodeDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
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
