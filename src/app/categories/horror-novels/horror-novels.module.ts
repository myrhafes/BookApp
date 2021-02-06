import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorrorNovelsPageRoutingModule } from './horror-novels-routing.module';

import { HorrorNovelsPage } from './horror-novels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorrorNovelsPageRoutingModule
  ],
  declarations: [HorrorNovelsPage]
})
export class HorrorNovelsPageModule {}
