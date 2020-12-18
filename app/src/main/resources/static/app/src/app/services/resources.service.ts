import { Injectable } from '@angular/core';
import {RxStompService} from "@stomp/ng2-stompjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  WS_ENDPOINT_URL = '/ws/nodes/resources'

  constructor(private stompService: RxStompService) {}


  connectResources = (): Observable<any> => {
    return this.stompService.watch(this.WS_ENDPOINT_URL)
  }
}
