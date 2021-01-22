import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryBookPage } from './history-book.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryBookPageRoutingModule {}
