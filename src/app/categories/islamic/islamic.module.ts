import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslamicPageRoutingModule } from './islamic-routing.module';

import { IslamicPage } from './islamic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IslamicPageRoutingModule
  ],
  declarations: [IslamicPage]
})
export class IslamicPageModule {}
