import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PocketNovelsPageRoutingModule } from './pocket-novels-routing.module';

import { PocketNovelsPage } from './pocket-novels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PocketNovelsPageRoutingModule
  ],
  declarations: [PocketNovelsPage]
})
export class PocketNovelsPageModule {}
