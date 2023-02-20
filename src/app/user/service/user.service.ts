import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string= 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  getUser(query:string):Observable<User> {
    return this.http.get<User>(`${this.url}${query}`) 
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`) 
  }

}
