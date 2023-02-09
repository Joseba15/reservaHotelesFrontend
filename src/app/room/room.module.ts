import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRoomsComponent } from './get-rooms/get-rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DelRoomComponent } from './del-room/del-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { GetRoomComponent } from './get-room/get-room.component';
import { RoomRoutingModule } from './room-routing.module';



@NgModule({
  declarations: [
    GetRoomsComponent,
    AddRoomComponent,
    DelRoomComponent,
    UpdateRoomComponent,
    GetRoomComponent
  ],

  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
