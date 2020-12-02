import { Injectable } from '@angular/core';
import {RxStompService} from "@stomp/ng2-stompjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  text;

  constructor(private stompService: RxStompService) {
    this.stompService.watch('/ws/nodes').subscribe(data => {this.text = data.body;}  )
  }

  send = () => {
    this.stompService.publish({destination: '/ws', body: `${Math.random()}`});
  }
}
