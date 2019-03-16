import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CupsRoutingModule } from './cups-routing.module';
import { CupsItemComponent } from './cups-item/cups-item.component';
import { CupsListComponent } from './cups-list/cups-list.component';
import { CupsDetailComponent } from './cups-detail/cups-detail.component';
import { CupsService } from './cups.service';

@NgModule({
  declarations: [
    CupsItemComponent,
    CupsListComponent,
    CupsDetailComponent,
  ],
  imports: [
    CommonModule,
    CupsRoutingModule
  ],
  providers: [
    CupsService
  ]
})
export class CupsModule { }
