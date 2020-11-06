import { Component } from '@angular/core';
import {WebSocketService} from "./services/web-socket.service";
import * as Stomp from '@stomp/ng2-stompjs';
import {RxStompService} from "@stomp/ng2-stompjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = "hello"
  title = 'app';
  webSocket: WebSocket;
  client;

  constructor(private stompService: RxStompService) {

  }

  connect = () => {

  }

  send = () => {
    this.stompService.publish({destination: '/hello', body: 'gerne'});
  }

}
