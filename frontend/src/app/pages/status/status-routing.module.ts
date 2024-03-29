import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: StatusComponent },
  { path: 'criar', component: FormComponent },
  { path: 'editar/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
