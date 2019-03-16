import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CupsListComponent } from './cups-list/cups-list.component';
import { CupsDetailComponent } from './cups-detail/cups-detail.component';

const routes: Routes = [
  { path: '', component: CupsListComponent },
  { path: 'detail', component: CupsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CupsRoutingModule { }
