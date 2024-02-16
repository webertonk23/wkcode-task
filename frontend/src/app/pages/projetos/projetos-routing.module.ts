import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { FormComponent } from './form/form.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: ProjetosComponent },
  { path: 'criar', component: FormComponent },
  { path: 'editar/:id', component: FormComponent },
  { path: ':id/tasks', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
