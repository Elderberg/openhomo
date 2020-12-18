import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExplorerNodesService {
  BASE_URL = 'http://localhost:8080';
  GET_NEW_NODES_URI = '/api/nodes/unregistered';

  constructor(private http: HttpClient) { }

  // [GET] gets initial node list from api
  getNewNodes = (): Observable<any> => {
    return this.http.get(this.BASE_URL + this.GET_NEW_NODES_URI)
  }


}
