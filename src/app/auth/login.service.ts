import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, switchMap, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../login/interfaces/token.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string= 'http://localhost:8080/signin';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient, private cookies:CookieService) { }



  login(username:string, password:string):Observable<boolean>{

    return this.http.post<TokenInterface>(this.url,{"username":username,"password":password}, this.httpOptions)
    .pipe(  switchMap(token=> {
      this.cookies.set('token',token.token);
      return of (true);
    }),catchError(error =>{
      this.cookies.delete('token');
      return of (false);
    }))
  }

  logout(){
    this.cookies.delete('token');
  }



}
