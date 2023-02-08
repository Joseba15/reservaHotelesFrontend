import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  myForm: FormGroup = this.fb.group({ 
    place: ['',[Validators.required, Validators.minLength(3)]],
    entryDate: ['',[Validators.required,   ]], //falta validar los campos de tipo fecha
    exitDate: ['',[Validators.required, ]], //falta validar los campos de tipo fecha
    numPeople: ['',[Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save(){

  }

}
