import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsychologyAndSociologyPageRoutingModule } from './psychology-and-sociology-routing.module';

import { PsychologyAndSociologyPage } from './psychology-and-sociology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsychologyAndSociologyPageRoutingModule
  ],
  declarations: [PsychologyAndSociologyPage]
})
export class PsychologyAndSociologyPageModule {}
