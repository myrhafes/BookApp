import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanDevelopementPage } from './human-developement.page';

const routes: Routes = [
  {
    path: '',
    component: HumanDevelopementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanDevelopementPageRoutingModule {}
