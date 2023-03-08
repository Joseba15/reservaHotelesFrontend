import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../interfaces/room.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url:string= 'http://localhost:8080/room';


  constructor(private http:HttpClient) { }


  getRoom(query:string):Observable<Room> {
    return this.http.get<Room>(`${this.url}${query}`) 
  }

  getRooms():Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}`) 
  }

  // getRoomsbyName(place:string):Observable<Room[]> {
  //   return this.http.get<Room[]>(`${this.url}${place}`) 
  // }

  addRoom(room : Room):Observable<Room>{
    return this.http.post<Room>(this.url,room)
  }

  // delRoom()

}
