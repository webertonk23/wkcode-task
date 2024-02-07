import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoasComponent } from './pessoas.component';
import { EditarComponent } from './editar/editar.component';
import { CriarComponent } from './criar/criar.component';

const routes: Routes = [
  { path: '', component: PessoasComponent },
  { path: 'criar', component: CriarComponent },
  { path: 'editar', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PessoasRoutingModule { }
