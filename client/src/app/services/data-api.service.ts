import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

import { EventInterface } from '../models/event-interface';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  
  constructor(private http: HttpClient, private authService:AuthService) { }
  evento: Observable<any>;
  eventos: Observable<any>;
  headers : HttpHeaders =new HttpHeaders({
    "Content-Type": "aplication/json",
    Authorization: this.authService.getToken()
  });

  getAllEvents(){
    const url_api = 'http://localhost:3000/api/enentos';
    return this.http.get(url_api);

  }

  getEventId(id: string){
    const url_api =  `http://localhost:3000/api/productos/${id}`;
    return (this.evento = this.http.get(url_api));

  }

  saveEvent(evento: EventInterface){
    let token;
    const url_api =  `http://localhost:3000/api/productos/${token}`;
    return this.http.post<EventInterface>(url_api, evento,{headers : this.headers})
    .pipe(map(data => data));
  }

  updateEvent(evento){
    let token = this.authService.getToken();
    const url_api =  `http://localhost:3000/api/productos/${token}`;
    return this.http.put<EventInterface>(url_api, this.evento,{headers : this.headers})
    .pipe(map(data => data));
  }

  deleteEvent(id: string){
    let token = this.authService.getToken();
    const url_api =  `http://localhost:3000/api/productos/${id}`;
    return this.http.delete(url_api, {headers : this.headers})
    .pipe(map(data => data));
  }

}
