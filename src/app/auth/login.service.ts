import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, switchMap, Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../login/interfaces/token.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string= 'http://localhost:8080/signin';
  private loggedIn = new BehaviorSubject<boolean> (false);
  private isAdmin = new BehaviorSubject<boolean> (false);


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private cookies:CookieService) {
    // if (this.cookies.get('token')) {
    //   this.isLoggedIn.
    // }
   }



  login(username:string, password:string):Observable<boolean>{

    return this.http.post<TokenInterface>(this.url,{"username":username,"password":password}, this.httpOptions)
    .pipe(  switchMap(token=> {
      this.cookies.set('token',token.token);
      this.loggedIn.next(true);
      return of (true);
      
    }),catchError(error =>{
      this.cookies.delete('token');
      this.loggedIn.next(false);

      return of (false);
    }))
  }

  logout(){
    this.loggedIn.next(false);
    this.cookies.delete('token');
  }



}
