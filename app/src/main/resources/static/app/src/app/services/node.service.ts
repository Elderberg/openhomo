import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  ADD_NODE_URI = '/api/nodes'
  GET_NODE_URI = '/api/nodes'
  DELETE_NODE_URI = '/api/nodes'

  constructor(private http: HttpClient) {}


  getNodes = () => {
    return this.http.get(`http://localhost:8080/${this.GET_NODE_URI}`)
  }

  addNode = (node) => {
    return this.http.post(`http://localhost:8080/${this.ADD_NODE_URI}`, node, {observe: 'response'})
  }

  deleteNode = (id) => {
    return this.http.delete(`http://localhost:8080/${this.DELETE_NODE_URI}/${id}`, {observe: 'response'})
  }
}
