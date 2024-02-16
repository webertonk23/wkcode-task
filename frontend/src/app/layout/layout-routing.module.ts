import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'pessoas',
    loadChildren: () => import('../pages/pessoas/pessoas.module').then(m => m.PessoasModule)
  },  
  {
    path: 'status',
    loadChildren: () => import('../pages/status/status.module').then(m => m.StatusModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('../pages/projetos/projetos.module').then(m => m.ProjetosModule)
  },
  {
    path: 'sprints',
    loadChildren: () => import('../pages/sprints/sprints.module').then(m => m.SprintsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
