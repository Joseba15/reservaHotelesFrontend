import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetuserComponent } from './getuser/getuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DelUserComponent } from './del-user/del-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'getUsers', component: GetUsersComponent },
        { path: 'getUser', component: GetuserComponent },
        { path: 'addRoom', component: AddUserComponent },
        { path: 'delRoom', component: DelUserComponent },
        { path: 'delRoom', component: UpdateUserComponent },

      ] 
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })
  export class UserRoutingModule { }