import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }


  getWebSocket() : WebSocket {
    return new WebSocket("ws://localhost:8080/ws")
  }
}
