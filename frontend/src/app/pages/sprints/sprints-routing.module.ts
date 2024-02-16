import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintsComponent } from './sprints.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: SprintsComponent },
  { path: 'criar', component: FormComponent },
  { path: 'editar/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintsRoutingModule { }
