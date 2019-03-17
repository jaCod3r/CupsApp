import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CupsRoutingModule } from './cups-routing.module';
import { CupsItemComponent } from './cups-item/cups-item.component';
import { CupsListComponent } from './cups-list/cups-list.component';
import { CupsService } from './cups.service';
import { CupsAddComponent } from './cups-add/cups-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CupsItemComponent,
    CupsListComponent,
    CupsAddComponent,
  ],
  imports: [
    CommonModule,
    CupsRoutingModule,
    FormsModule
  ],
  providers: [
    CupsService
  ]
})
export class CupsModule { }
