import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalBookPage } from './medical-book.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalBookPageRoutingModule {}
