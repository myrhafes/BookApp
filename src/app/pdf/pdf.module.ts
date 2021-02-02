import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PdfPageRoutingModule } from './pdf-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { PdfPage } from './pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfPageRoutingModule,
    PdfViewerModule,
    SweetAlert2Module
  ],
  declarations: [PdfPage]
})
export class PdfPageModule {}
