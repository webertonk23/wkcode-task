import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EquipesComponent } from './components/pages/equipes/equipes.component';
import { PaineisComponent } from './paineis/paineis.component';
import { PainelComponent } from './paineis/painel/painel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'paineis', component: PaineisComponent},
  {path: 'paineis/:id', component: PainelComponent},
  {path: 'equipes', component: EquipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
