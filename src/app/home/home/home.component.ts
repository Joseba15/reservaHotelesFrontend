import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ValidationErrors,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  myForm: FormGroup = this.fb.group({ 
    place: ['',[Validators.required, Validators.minLength(3)]],
    entryDate: ["",[Validators.required,   ]], //falta validar los campos de tipo fecha
    exitDate: ["",[Validators.required, ]], //falta validar los campos de tipo fecha
    numPeople: [0,[Validators.required, Validators.min(0)]]
   },{validators: [this.entryDateValidator()]})

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  entryDateValidator(): ValidationErrors|null {
    return ( myForm: FormGroup) => {
      const date:Date = myForm.get('entryDate')?.value;
      const dateNow :Date = new Date();

      

      if(date<dateNow) return {isValid:false};      
      
      return null;
    };
  }

  save(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();  
    }
    this.myForm.reset({
      place: '',
      entryDate: '',
      exitDate: '',
      numPeople:0,
    })

  }

}
