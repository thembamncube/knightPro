import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHotelPage } from './add-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: AddHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHotelPageRoutingModule {}
