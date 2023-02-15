import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import {Room} from '../interfaces/room.interface';

@Component({
  selector: 'app-get-rooms',
  templateUrl: './get-rooms.component.html',
  styleUrls: ['./get-rooms.component.css']
})
export class GetRoomsComponent implements OnInit {

  constructor(private roomService : RoomService) { }

  rooms:Room[] = [];
  error:boolean = true;


  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(){
    this.roomService.getRooms()
    .subscribe({
      next: (resp) => {
        this.rooms = resp
        this.error = false;
      }
    })
  }


}
