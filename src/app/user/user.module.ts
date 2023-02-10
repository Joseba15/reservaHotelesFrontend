import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetuserComponent } from './getuser/getuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DelUserComponent } from './del-user/del-user.component';



@NgModule({
  declarations: [
    GetUsersComponent,
    GetuserComponent,
    AddUserComponent,
    DelUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
