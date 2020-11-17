import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingFeedBackPageRoutingModule } from './booking-feed-back-routing.module';

import { BookingFeedBackPage } from './booking-feed-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingFeedBackPageRoutingModule
  ],
  declarations: [BookingFeedBackPage]
})
export class BookingFeedBackPageModule {}
