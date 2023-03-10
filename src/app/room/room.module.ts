import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRoomsComponent } from './get-rooms/get-rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DelRoomComponent } from './del-room/del-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { GetRoomComponent } from './get-room/get-room.component';
import { RoomRoutingModule } from './room-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    RoomRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class RoomModule { }
