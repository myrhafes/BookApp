import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomanticNovelsPageRoutingModule } from './romantic-novels-routing.module';

import { RomanticNovelsPage } from './romantic-novels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomanticNovelsPageRoutingModule
  ],
  declarations: [RomanticNovelsPage]
})
export class RomanticNovelsPageModule {}
