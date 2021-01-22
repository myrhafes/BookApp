import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishLiteraturePageRoutingModule } from './english-literature-routing.module';

import { EnglishLiteraturePage } from './english-literature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishLiteraturePageRoutingModule
  ],
  declarations: [EnglishLiteraturePage]
})
export class EnglishLiteraturePageModule {}
