import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../interfaces/room';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url:string= 'http://localhost:8080/room';


  constructor(private http:HttpClient) { }


  getRooms(query:string):Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}name/${query}`)  
  }

}
