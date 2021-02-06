import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildrenStoriesPageRoutingModule } from './children-stories-routing.module';

import { ChildrenStoriesPage } from './children-stories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildrenStoriesPageRoutingModule
  ],
  declarations: [ChildrenStoriesPage]
})
export class ChildrenStoriesPageModule {}
