import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resource} from '../classes/Resource.class';

@Injectable({
  providedIn: 'root'
})
export class ExplorerResourceService {

  BASE_URL = 'http://localhost:8080';
  POST_RESOURCE_URI = '/api/resources';
  GET_RESOURCE_URI = '/api/resources';

  constructor(private http: HttpClient) { }

  getResources = (): Observable<any> => {
    return this.http.get(this.BASE_URL + this.GET_RESOURCE_URI)
  }

  // [POST] adds new resources to api
  postResources = (resources: Resource[]): Observable<any> => {
    return this.http.post(this.BASE_URL + this.POST_RESOURCE_URI, resources, {observe: 'response'})
  }
}
