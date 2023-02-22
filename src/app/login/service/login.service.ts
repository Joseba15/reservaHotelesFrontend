import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string= 'http://localhost:8080/login';


  constructor() { }



}
