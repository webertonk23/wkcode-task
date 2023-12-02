import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PaineisComponent } from './components/pages/paineis/paineis.component';
import { EquipesComponent } from './components/pages/equipes/equipes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'paineis', component: PaineisComponent},
  {path: 'equipes', component: EquipesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
