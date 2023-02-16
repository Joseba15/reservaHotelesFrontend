import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm; 


  userData={
    username: "",
    password: "",
    name: "",
    email:"",
    city:"",
    phone:0,
    role:"",
    enable:false,
    verificartionCode:0,
    img:""
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
