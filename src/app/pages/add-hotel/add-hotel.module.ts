import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHotelPageRoutingModule } from './add-hotel-routing.module';

import { AddHotelPage } from './add-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHotelPageRoutingModule
  ],
  declarations: [AddHotelPage]
})
export class AddHotelPageModule {}
