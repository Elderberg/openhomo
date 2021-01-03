import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../classes/Room.class.js';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExplorerRoomsService {

  BASE_URL = 'http://localhost:8080';
  POST_ROOM_URI = '/api/room';
  GET_ROOMS_URI = '/api/room';

  constructor(private http: HttpClient) { }

  getRooms = (): Observable<any> => {
    return this.http.get(this.BASE_URL + this.GET_ROOMS_URI)
  }

  // [POST] adds new room to api
  postRoom = (room: Room): Observable<any> => {
    return this.http.post(this.BASE_URL + this.POST_ROOM_URI, room, {observe: 'response'})
  }
}
