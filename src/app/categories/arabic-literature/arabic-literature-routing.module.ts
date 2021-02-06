import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArabicLiteraturePage } from './arabic-literature.page';

const routes: Routes = [
  {
    path: '',
    component: ArabicLiteraturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArabicLiteraturePageRoutingModule {}
