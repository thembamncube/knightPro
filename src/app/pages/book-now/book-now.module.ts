import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookNOwPageRoutingModule } from './book-now-routing.module';

import { BookNOwPage } from './book-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookNOwPageRoutingModule
  ],
  declarations: [BookNOwPage]
})
export class BookNOwPageModule {}
