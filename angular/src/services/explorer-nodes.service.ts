import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Node} from '../classes/Node.class.js';

@Injectable({
  providedIn: 'root'
})
export class ExplorerNodesService {
  BASE_URL = 'http://localhost:8080';
  GET_NEW_NODES_URI = '/api/nodes/unregistered';
  POST_NODE_URI = '/api/nodes';

  constructor(private http: HttpClient) { }

  // [GET] gets initial node list from api
  getNewNodes = (): Observable<any> => {
    return this.http.get(this.BASE_URL + this.GET_NEW_NODES_URI)
  }

  // [POST] add new node to api
  postNode = (node: Node): Observable<any> => {
    return this.http.post(this.BASE_URL + this.POST_NODE_URI, node, {observe: 'response'})
  }


}
