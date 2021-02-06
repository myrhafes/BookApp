import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrenStoriesPage } from './children-stories.page';

const routes: Routes = [
  {
    path: '',
    component: ChildrenStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrenStoriesPageRoutingModule {}
