import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmericanLiteraturePage } from './american-literature.page';

const routes: Routes = [
  {
    path: '',
    component: AmericanLiteraturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmericanLiteraturePageRoutingModule {}
