import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilosophyPageRoutingModule } from './philosophy-routing.module';

import { PhilosophyPage } from './philosophy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilosophyPageRoutingModule
  ],
  declarations: [PhilosophyPage]
})
export class PhilosophyPageModule {}
