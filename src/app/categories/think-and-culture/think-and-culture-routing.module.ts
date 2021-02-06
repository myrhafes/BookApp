import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThinkAndCulturePage } from './think-and-culture.page';

const routes: Routes = [
  {
    path: '',
    component: ThinkAndCulturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThinkAndCulturePageRoutingModule {}
