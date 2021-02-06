import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArabicNovelsPage } from './arabic-novels.page';

const routes: Routes = [
  {
    path: '',
    component: ArabicNovelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArabicNovelsPageRoutingModule {}
