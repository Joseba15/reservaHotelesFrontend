import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetRoomComponent } from './get-room/get-room.component';
import { GetRoomsComponent } from './get-rooms/get-rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DelRoomComponent } from './del-room/del-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'getRoom', component: GetRoomComponent },
      { path: 'getRooms', component: GetRoomsComponent },
      { path: 'addRoom', component: AddRoomComponent },
      { path: 'delRoom', component: DelRoomComponent },
      { path: 'updateRoom', component: UpdateRoomComponent },
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoomRoutingModule { }