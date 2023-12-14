import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  links = [
    {
      route: '/',
      name:  'Dashboard',
      icon: '',
      active: 'active' ?? '',
    },
    {
      route: '/pessoas',
      name:  'Pessoas',
      icon: '',
      active: 'active' ?? '',
    },
    {
      route: '/produtos',
      name:  'produtos',
      icon: '',
      active: 'active' ?? '',
    },
    {
      route: '/serviços',
      name:  'Serviços',
      icon: '',
      active: 'active' ?? '',
    },
    {
      route: '/vendas',
      name:  'Vendas',
      icon: '',
      active: 'active' ?? '',
    },
    {
      route: '/financeiro',
      name:  'Financeiro',
      icon: '',
      active: 'active' ?? '',
    },
  ]
}
