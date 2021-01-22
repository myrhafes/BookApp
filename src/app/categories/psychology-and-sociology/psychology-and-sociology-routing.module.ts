import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsychologyAndSociologyPage } from './psychology-and-sociology.page';

const routes: Routes = [
  {
    path: '',
    component: PsychologyAndSociologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsychologyAndSociologyPageRoutingModule {}
