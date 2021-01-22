import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThinkAndCulturePageRoutingModule } from './think-and-culture-routing.module';

import { ThinkAndCulturePage } from './think-and-culture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThinkAndCulturePageRoutingModule
  ],
  declarations: [ThinkAndCulturePage]
})
export class ThinkAndCulturePageModule {}
