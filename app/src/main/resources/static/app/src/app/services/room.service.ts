import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  ADD_ROOM_URI = '/api/rooms'
  GET_ROOM_URI = '/api/rooms'

  constructor(private http: HttpClient) { }


  getRooms = () => {
    return this.http.get(`http://localhost:8080/${this.GET_ROOM_URI}`)
  }

  addRoom = (room) => {
    return this.http.post(`http://localhost:8080/${this.ADD_ROOM_URI}`, room, {observe: 'response'})
  }
}
