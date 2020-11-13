import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnwnerloginPage } from './onwnerlogin.page';

const routes: Routes = [
  {
    path: '',
    component: OnwnerloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnwnerloginPageRoutingModule {}
