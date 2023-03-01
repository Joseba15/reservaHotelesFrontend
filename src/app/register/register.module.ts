import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class RegisterModule { }
