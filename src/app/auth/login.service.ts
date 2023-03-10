import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, switchMap, Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../login/interfaces/token.interface';
import jwt_decode from 'jwt-decode';
import { DecodeToken } from './decodetoken.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string= 'https://gotravelapi-production.up.railway.app/signin';
  private loggedIn = new BehaviorSubject<boolean> (false);
  private adminIn = new BehaviorSubject<boolean> (false);
  // private getRol! : string ;
  // private isLogin! : string;

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
      this.cookies.set('role',this.decodeJwt(token.token).role)
      this.cookies.set('login','true');

      // this.isLogin = this.cookies.get('login')
      // this.getRol= this.cookies.get('role')
      // if (this.getRol=='ADMIN') {
      // }
      if(this.decodeJwt(token.token).role=='ADMIN'){
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
    this.cookies.delete('role');
  }

  decodeJwt(jwt: string): DecodeToken {        
    return jwt_decode(jwt)     
  }


}
