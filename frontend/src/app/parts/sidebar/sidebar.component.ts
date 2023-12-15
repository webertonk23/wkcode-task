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
      icon: 'fa-tachometer',
      active: 'active' ?? '',
    },
    {
      route: '/pessoas',
      name:  'Pessoas',
      icon: 'fa-users',
      active: 'active' ?? '',
    },
    {
      route: '/produtos',
      name:  'produtos',
      icon: 'fa-cubes',
      active: 'active' ?? '',
    },
    {
      route: '/serviços',
      name:  'Serviços',
      icon: 'fa-wrench',
      active: 'active' ?? '',
    },
    {
      route: '/vendas',
      name:  'Vendas',
      icon: 'fa-cart-plus',
      active: 'active' ?? '',
    },
    {
      route: '/financeiro',
      name:  'Financeiro',
      icon: 'fa-usd ',
      active: 'active' ?? '',
    },
  ]
}
