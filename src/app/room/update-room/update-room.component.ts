import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html'
})
export class UpdateRoomComponent implements OnInit {

  // @ViewChild('myForm') myForm!: NgForm; 


  json :any={
    codRoom:'',
    rating:'',
    price:'',
    numBed:'',
    avaliable:'',
    codHotel:'',

  }

  constructor(private route : ActivatedRoute , private service: RoomService, private fb: FormBuilder) { }

  room : any={} as any;


  ngOnInit(): void {
    let  id = this.route.snapshot.params ['id']
    this.service.getRoom(id)
    .subscribe({
      next: (resp) => {
        this.room=resp
      }
    })
  }


  myForm: FormGroup= this.fb.group({
    codRoom:['',],
    rating:['', [Validators.required, Validators.min(0), Validators.max(5)] ],
    price:['', [Validators.required, Validators.min(0),Validators.max(1000) ]],
    numBed:['', [Validators.required, Validators.min(0), Validators.max(5) ]],
    avaliable:['', [Validators.required]],
    codHotel:['',[Validators.required, Validators.min(0)]],
    fileSource:['', [Validators.required]]
  });


  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched && this.myForm?.controls[field].invalid
  }

  onUpdate(){
    this.json.codRoom= this.room.codRoom
    this.json.rating= this.myForm.get('rating')?.value
    this.json.price= this.myForm.get('price')?.value
    this.json.numBed= this.myForm.get('numBed')?.value
    this.json.avaliable= this.myForm.get('avaliable')?.value


    // this.service.
  }


  onFileChange(event:any) {
    console.log(event);
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
  

}
