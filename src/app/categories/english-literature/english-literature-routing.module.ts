import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishLiteraturePage } from './english-literature.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishLiteraturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishLiteraturePageRoutingModule {}
