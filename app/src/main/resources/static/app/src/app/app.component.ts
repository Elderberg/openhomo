import { Component } from '@angular/core';
import {RxStompService} from "@stomp/ng2-stompjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text;
  title = 'app';

  constructor(private stompService: RxStompService) {

    this.stompService.watch('/ws/nodes').subscribe(data => {this.text = data.body;}  )
  }

  connect = () => {

  }

  send = () => {
    this.stompService.publish({destination: '/ws', body: `${Math.random()}`});
  }



}
