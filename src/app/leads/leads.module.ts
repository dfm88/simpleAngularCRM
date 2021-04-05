import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { LeadToolComponent } from './leads-listing/lead-tool/lead-tool.component';
import { DownloadExcelComponent } from './leads-listing/lead-tool/download-excel/download-excel.component';
import { DownloadPdfComponent } from './leads-listing/lead-tool/download-pdf/download-pdf.component';



@NgModule({
  declarations: [
    LeadsListingComponent,
    LeadsGridComponent,
    LeadToolComponent,
    DownloadExcelComponent,
    DownloadPdfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
