import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilosophyPage } from './philosophy.page';

const routes: Routes = [
  {
    path: '',
    component: PhilosophyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilosophyPageRoutingModule {}
