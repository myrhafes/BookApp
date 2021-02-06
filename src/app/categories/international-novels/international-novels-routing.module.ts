import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalNovelsPage } from './international-novels.page';

const routes: Routes = [
  {
    path: '',
    component: InternationalNovelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternationalNovelsPageRoutingModule {}
