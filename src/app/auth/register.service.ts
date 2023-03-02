import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'http://localhost:8080/signup'
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  register(username: string, password:string, name:string, email:string,city:string):Observable<boolean>{
 

    
    return this.http.post<any>(this.url, {"username":username, "password":password, "name":name, "email":email,"city":city,"img":"","phone":null},this.httpOptions)
    .pipe( switchMap(resp => {
            return of(true);
        }),catchError(error => {
            return of(false);
        })
    )
  }





}

