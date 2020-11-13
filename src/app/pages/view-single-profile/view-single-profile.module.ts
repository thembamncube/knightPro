import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSingleProfilePageRoutingModule } from './view-single-profile-routing.module';

import { ViewSingleProfilePage } from './view-single-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSingleProfilePageRoutingModule
  ],
  declarations: [ViewSingleProfilePage]
})
export class ViewSingleProfilePageModule {}
