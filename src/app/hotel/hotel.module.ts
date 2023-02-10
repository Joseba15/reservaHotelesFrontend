import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { GetHotelComponent } from './get-hotel/get-hotel.component';
import { GetHotelesComponent } from './get-hoteles/get-hoteles.component';



@NgModule({
  declarations: [
    AddHotelComponent,
    GetHotelComponent,
    GetHotelesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HotelModule { }
