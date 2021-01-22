import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArabicLiteraturePageRoutingModule } from './arabic-literature-routing.module';

import { ArabicLiteraturePage } from './arabic-literature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArabicLiteraturePageRoutingModule
  ],
  declarations: [ArabicLiteraturePage]
})
export class ArabicLiteraturePageModule {}
