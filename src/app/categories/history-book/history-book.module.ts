import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryBookPageRoutingModule } from './history-book-routing.module';

import { HistoryBookPage } from './history-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryBookPageRoutingModule
  ],
  declarations: [HistoryBookPage]
})
export class HistoryBookPageModule {}
