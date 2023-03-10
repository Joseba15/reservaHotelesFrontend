import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../interfaces/room.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url:string= 'https://gotravelapi-production.up.railway.app/room';

  constructor(private http:HttpClient) { }


  getRoom(query:number):Observable<Room> {
    return this.http.get<Room>(`${this.url}/${query}`) 
  }

  getRooms():Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}`) 
  }

  updateRoom(id:number,json:any,foto :File):Observable<Room>{
      const datos: FormData = new FormData();
      datos.append('room', new Blob([JSON.stringify(json)], {type: 'application/json'}))
      datos.append('file', foto, foto.name);
      return this.http.put<Room>(`${this.url}/${id}`,datos)
  }

  addRoom(room : Room):Observable<Room>{
    return this.http.post<Room>(this.url,room)
  }

  delRoom(query:number):Observable<Room>{
    return this.http.delete<Room>(`${this.url}/${query}`) 
    
  }

}
