import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalBookPageRoutingModule } from './medical-book-routing.module';

import { MedicalBookPage } from './medical-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalBookPageRoutingModule
  ],
  declarations: [MedicalBookPage]
})
export class MedicalBookPageModule {}
