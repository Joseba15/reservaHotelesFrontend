import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetuserComponent } from './getuser/getuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DelUserComponent } from './del-user/del-user.component';
import { UserRoutingModule } from './user.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GetUsersComponent,
    GetuserComponent,
    AddUserComponent,
    DelUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class UserModule { }
