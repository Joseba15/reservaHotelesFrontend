import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../interfaces/room.interface';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-get-room',
  templateUrl: './get-room.component.html',
  styleUrls: ['./get-room.component.css']

})
export class GetRoomComponent implements OnInit {

  constructor(private route : ActivatedRoute,private service: RoomService) { }

  error:boolean = true;
  room : any={} as any;

  ngOnInit(): void {
    let  id = this.route.snapshot.params ['id']
    this.service.getRoom(id)
    .subscribe({
      next: (resp) => {
        this.room=resp
      }
    })
    console.log(id);
    
  }

}
