import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomanticNovelsPage } from './romantic-novels.page';

const routes: Routes = [
  {
    path: '',
    component: RomanticNovelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomanticNovelsPageRoutingModule {}
