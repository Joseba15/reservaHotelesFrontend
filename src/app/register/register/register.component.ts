import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  @ViewChild('myForm') myForm!: NgForm; 


  userData={
    username: "",
    password: ""
  }

  isLoggedIn!: boolean;

  
  constructor(private registerService : RegisterComponent) { }

  ngOnInit(): void {
  }

  notValidUsername(): boolean{
    return this.myForm?.controls['username']?.invalid &&
      this.myForm?.controls['username']?.touched
  }

  notValidPassword(): boolean{
    return this.myForm?.controls['password']?.invalid &&
      this.myForm?.controls['password']?.touched
  }



  save() {
    // this.myForm.resetForm  vacia todos los campos 
    this.myForm.resetForm({
      username:"",
      password:""
    })
  }


  signUp(){

  }
}
