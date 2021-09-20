import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  evento!: Observable<any>;
  eventos!: Observable<any>;
  constructor(private http: HttpClient) { }
  
  getAllEvents(){
    const url_api = 'http://localhost:3000/api/enentos';
    return this.http.get(url_api);

  }

  getEventId(id: string){
    const url_api =  `http://localhost:3000/api/productos/${id}`;
    return (this.evento = this.http.get(url_api));

  }

  saveEvent(evento){
    let token;
    const url_api =  `http://localhost:3000/api/productos/${token}`;
    return this.http.post(url_api evento,{})
    .pipe(map(data) => data));
  }

}
