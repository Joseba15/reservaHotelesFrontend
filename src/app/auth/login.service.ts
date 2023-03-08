import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, switchMap, Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../login/interfaces/token.interface';
import * as jwt_decode from 'jwt-decode';
import { DecodeToken } from './decodetoken.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string= 'http://localhost:8080/signin';
  private loggedIn = new BehaviorSubject<boolean> (false);
  private adminIn = new BehaviorSubject<boolean> (false);
 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isAdminIn(){
    return this.adminIn.asObservable();
  }

  constructor(private http: HttpClient, private cookies:CookieService) {

   }



  login(username:string, password:string):Observable<boolean>{

    return this.http.post<TokenInterface>(this.url,{"username":username,"password":password}, this.httpOptions)
    .pipe(  switchMap(token=> {
      this.cookies.set('token',token.token);
      if (this.decodeJwt(token.token).role=='ADMIN') {
        this.adminIn.next(true);
      }
      this.loggedIn.next(true);
      return of (true);
      
    }),catchError(error =>{
      this.cookies.delete('token');
      this.loggedIn.next(false);
      this.adminIn.next(false);
      return of (false);
    }))
  }

  logout(){
    this.loggedIn.next(false);
    this.adminIn.next(false);
    this.cookies.delete('token');
  }

  decodeJwt(jwt: string): DecodeToken {        
    return jwt_decode(jwt)     
  }


}
