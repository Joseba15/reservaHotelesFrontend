import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm; 


  userData={
    username: "",
    password: ""
  }

  isLoggedIn!: boolean;

  
  constructor(private loginService : LoginService, private route: Router) { }

  ngOnInit(): void {
    //  if(this.loginService.isLoggedIn){
    //    this.route.navigateByUrl("")
    //  }
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

  signIn():void{
    // console.log(this.myForm.value.username,this.myForm.value.password);
  
    this.loginService.login(this.myForm.value.username,this.myForm.value.password)
    .subscribe({
      next: (resp) => {
        if (resp) {
          this.isLoggedIn=true;
          Swal.fire({
            icon: 'success',
            title: 'Login succesfull',
          })
          this.route.navigate(['']);
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'username and/or password not correct'
          })
        }
      }
    })
    
  }

  logOut():void{
    this.loginService.logout();
    this.isLoggedIn=false;
  }

}
