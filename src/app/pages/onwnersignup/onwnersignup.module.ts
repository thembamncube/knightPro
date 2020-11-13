import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnwnersignupPageRoutingModule } from './onwnersignup-routing.module';

import { OnwnersignupPage } from './onwnersignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnwnersignupPageRoutingModule
  ],
  declarations: [OnwnersignupPage]
})
export class OnwnersignupPageModule {}
