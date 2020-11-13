import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnwnerloginPageRoutingModule } from './onwnerlogin-routing.module';

import { OnwnerloginPage } from './onwnerlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnwnerloginPageRoutingModule
  ],
  declarations: [OnwnerloginPage]
})
export class OnwnerloginPageModule {}
