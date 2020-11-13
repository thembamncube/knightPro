import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookNOwPage } from './book-now.page';

const routes: Routes = [
  {
    path: '',
    component: BookNOwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookNOwPageRoutingModule {}
