import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegisterService } from '../../auth/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  @ViewChild('myForm') myForm!: NgForm; 


  userData={
    username: "",
    password: "",
    name:"",
    email:"",
    city:""
  }
  isLoggedIn!: boolean;

  
  constructor(private registerService : RegisterService) { }

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

  notValidName(): boolean{
    return this.myForm?.controls['name']?.invalid &&
      this.myForm?.controls['name']?.touched
  }

  notValidEmail(): boolean{
    return this.myForm?.controls['email']?.invalid &&
      this.myForm?.controls['email']?.touched
  }

  notValidCity(): boolean{
    return this.myForm?.controls['city']?.invalid &&
      this.myForm?.controls['city']?.touched
  }



  // save() {
  //   // this.myForm.resetForm  vacia todos los campos 
  //   this.myForm.resetForm({
  //     username:"",
  //     password:""
  //   })
  // }


  signUp():void{
    // console.log(this.myForm.value.username,this.myForm.value.email, this.myForm.value.password, this.myForm.value.nombre)
    this.registerService.register(this.myForm.value.username,this.myForm.value.password,this.myForm.value.name,this.myForm.value.email ,this.myForm.value.city)
    .subscribe({
      next: (resp) => {
        if (resp) {
          this.isLoggedIn=true;
          Swal.fire({
            icon: 'success',
            title: 'Successful Register',
          })
          
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Try again!'
          })
        }
      }
    })

  }

  
}
