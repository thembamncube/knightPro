import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingFeedBackPage } from './booking-feed-back.page';

const routes: Routes = [
  {
    path: '',
    component: BookingFeedBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingFeedBackPageRoutingModule {}
