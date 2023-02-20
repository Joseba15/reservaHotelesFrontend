import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html'
})
export class GetUsersComponent implements OnInit {

  constructor(private userService : UserService) { }


  listaUsers:User[] = [];
  error:boolean = true;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe({
      next: (resp) => {
        this.listaUsers = resp
        this.error = false;
      }
    })
  }


  
}
