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
  // { path: 'pessoas', component: UserProfileComponent },
  // { path: 'table-list', component: TableListComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'icons', component: IconsComponent },
  // { path: 'maps', component: MapsComponent },
  // { path: 'notifications', component: NotificationsComponent },
  // { path: 'upgrade', component: UpgradeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
