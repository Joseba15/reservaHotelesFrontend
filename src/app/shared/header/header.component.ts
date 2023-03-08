import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  isAdminIn$!: Observable<boolean>;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn$=this.loginService.isLoggedIn;
    this.isAdminIn$= this.loginService.isAdminIn;
  }

  onLogout(){
    this.loginService.logout();
  }

}
