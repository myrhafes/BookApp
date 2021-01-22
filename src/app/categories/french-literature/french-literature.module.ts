import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchLiteraturePageRoutingModule } from './french-literature-routing.module';

import { FrenchLiteraturePage } from './french-literature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchLiteraturePageRoutingModule
  ],
  declarations: [FrenchLiteraturePage]
})
export class FrenchLiteraturePageModule {}
