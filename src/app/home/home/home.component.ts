import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ValidationErrors,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  myForm: FormGroup = this.fb.group({ 
    place: ["",[Validators.required, Validators.minLength(3)]],
    entryDate: ["",[Validators.required, this.DateValidator]], 
    exitDate: ["",[Validators.required, this.DateValidator]],
    numPeople: [0,[Validators.required, Validators.min(0)]]
   })

  constructor(private fb: FormBuilder) { }

  @Output() onSearch : EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
  }

  DateValidator(control: FormControl): ValidationErrors|null {
    
      const date:Date = new Date(control?.value);
      const dateNow :Date = new Date();

      if(date<dateNow) return {isValid:false};      
      
      return null;
  }

  search(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();  
    }
    this.myForm.reset({
      place: '',
      entryDate: '',
      exitDate: '',
      numPeople:0,
    })
    this.onSearch.emit(this.myForm.value.place)
  }

}
