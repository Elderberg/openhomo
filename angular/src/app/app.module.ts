import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule} from "../components.module";

import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ComponentsModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
