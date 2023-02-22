import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html'
})
export class GetUsersComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService : UserService) { }


  listaUsers:any[] = [];
  error:boolean = true;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.userService.getUsers()
    .subscribe({
      next: (resp) => {
        
        this.listaUsers = resp.content
        this.error = false;
                this.dtTrigger.next(this.listaUsers);

      }
    })
    
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  
}
