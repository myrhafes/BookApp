import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorrorNovelsPage } from './horror-novels.page';

const routes: Routes = [
  {
    path: '',
    component: HorrorNovelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorrorNovelsPageRoutingModule {}
