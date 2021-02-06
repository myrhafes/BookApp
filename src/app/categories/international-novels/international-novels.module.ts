import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternationalNovelsPageRoutingModule } from './international-novels-routing.module';

import { InternationalNovelsPage } from './international-novels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternationalNovelsPageRoutingModule
  ],
  declarations: [InternationalNovelsPage]
})
export class InternationalNovelsPageModule {}
