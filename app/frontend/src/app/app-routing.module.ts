import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/guards/auth.guard';
import { PessoasComponent } from './pages/pessoas/pessoas.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: HomeComponent},
      {path: 'pessoas', component: PessoasComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
