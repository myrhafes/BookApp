import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericanLiteraturePageRoutingModule } from './american-literature-routing.module';

import { AmericanLiteraturePage } from './american-literature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericanLiteraturePageRoutingModule
  ],
  declarations: [AmericanLiteraturePage]
})
export class AmericanLiteraturePageModule {}
