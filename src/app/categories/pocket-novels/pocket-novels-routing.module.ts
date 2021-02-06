import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PocketNovelsPage } from './pocket-novels.page';

const routes: Routes = [
  {
    path: '',
    component: PocketNovelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocketNovelsPageRoutingModule {}
