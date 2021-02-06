import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GermanLiteraturePageRoutingModule } from './german-literature-routing.module';

import { GermanLiteraturePage } from './german-literature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GermanLiteraturePageRoutingModule
  ],
  declarations: [GermanLiteraturePage]
})
export class GermanLiteraturePageModule {}
