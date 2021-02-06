import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchLiteraturePage } from './french-literature.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchLiteraturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchLiteraturePageRoutingModule {}
