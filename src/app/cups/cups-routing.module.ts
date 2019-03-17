import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CupsListComponent } from './cups-list/cups-list.component';
import { CupsAddComponent } from './cups-add/cups-add.component';

const routes: Routes = [
  { path: '', component: CupsListComponent },
  { path: 'add', component: CupsAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CupsRoutingModule { }
