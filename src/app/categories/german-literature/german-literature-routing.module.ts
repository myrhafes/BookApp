import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GermanLiteraturePage } from './german-literature.page';

const routes: Routes = [
  {
    path: '',
    component: GermanLiteraturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GermanLiteraturePageRoutingModule {}
