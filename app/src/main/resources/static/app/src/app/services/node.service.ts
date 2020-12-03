import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  ADD_NODE_URI = '/api/nodes/add'

  constructor(private http: HttpClient) { }

  addNode = (node) => {
    return this.http.post('http://localhost:8080' + this.ADD_NODE_URI, node, {observe: 'response'})
  }
}
