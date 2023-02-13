import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm; 


  userData={
    username: " ",
    password: ""
  }
  
  constructor() { }

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
      username:" ",
      password:""
    })

  }

}
