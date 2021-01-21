import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslamicPage } from './islamic.page';

const routes: Routes = [
  {
    path: '',
    component: IslamicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslamicPageRoutingModule {}
