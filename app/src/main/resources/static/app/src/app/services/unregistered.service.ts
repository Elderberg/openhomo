import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, observable, Observable} from "rxjs";
import {RxStompService} from "@stomp/ng2-stompjs";

@Injectable({
  providedIn: 'root'
})
export class UnregisteredService {
  WS_ENDPOINT_URL = '/ws/nodes/unregistered'
  INIT_ENDPOINT_URL = '/api/nodes/unregistered'


  private unregisteredNodes = new Map()

  constructor(private http: HttpClient, private stompService: RxStompService) {}

  nodesList = new BehaviorSubject<object[]>([]);

  connect = (): void => {
    this.stompService.watch(this.WS_ENDPOINT_URL).subscribe((message) => {
      let node = JSON.parse(message.body);
      this.unregisteredNodes.set(node.id, node);
      this.nodesList.next(Array.from(this.unregisteredNodes.values()))
    })
  }

  initNodeList = (): void => {
    this.http.get('http://localhost:8080' + this.INIT_ENDPOINT_URL).subscribe((data: object[]) => {
      this.nodesList.next(data)
    })
  }

  getNodeList = () => {
    return this.nodesList;
  }
}
