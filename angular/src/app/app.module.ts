import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component imports
import { AppComponent } from './app.component';
import { ComponentsModule} from "../components.module";

import {MaterialModule} from "./material.module";

// WebSocket imports
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from "@stomp/ng2-stompjs";
import {RxStompConfig} from "../configurations/rx-stomp.config";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ComponentsModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: RxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
