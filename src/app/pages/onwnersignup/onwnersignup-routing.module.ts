import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnwnersignupPage } from './onwnersignup.page';

const routes: Routes = [
  {
    path: '',
    component: OnwnersignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnwnersignupPageRoutingModule {}
