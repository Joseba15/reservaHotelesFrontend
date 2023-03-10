import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import {Room} from '../interfaces/room.interface';
import { LoginService } from '../../auth/login.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-get-rooms',
  templateUrl: './get-rooms.component.html',
  styleUrls: ['./get-rooms.component.css']
})
export class GetRoomsComponent implements OnInit {
  


  constructor(private roomService : RoomService,private loginService : LoginService) { }

  error:boolean = true;
  rooms:Room[] = [];
  isAdminIn$!: Observable<boolean>;

  rol! : string ;

  ngOnInit(): void {
    this.getRooms();
    this.isAdminIn$= this.loginService.isAdminIn;

    // this.rol=this.cookies.get('role');
    console.log(this.rol);
    
  }

  getRooms(){
    this.roomService.getRooms()
    .subscribe({
      next: (resp) => {
        this.rooms = resp
        console.log(this.rooms);
        this.error = false;

      }
    })
  }

  onDelete(cod: number){
    console.log(cod);
    this.roomService.delRoom(cod)
    .subscribe({
      next: (resp) => {
        window.location.reload();
      }
    })
  }


}
