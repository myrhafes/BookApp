import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumanDevelopementPageRoutingModule } from './human-developement-routing.module';

import { HumanDevelopementPage } from './human-developement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumanDevelopementPageRoutingModule
  ],
  declarations: [HumanDevelopementPage]
})
export class HumanDevelopementPageModule {}
