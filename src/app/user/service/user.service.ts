import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { Pageable } from '../interfaces/pageable.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string= 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  getUser(query:string):Observable<User> {
    return this.http.get<User>(`${this.url}${query}`) 
  }

  getUsers():Observable<Pageable> {
    return this.http.get<Pageable>(`${this.url}`) 
  }

}
