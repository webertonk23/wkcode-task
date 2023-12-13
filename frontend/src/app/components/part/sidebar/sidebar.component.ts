import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  currentRoute: string = '/';

  listPages  = [
    {
      title: 'Dashboard',
      route: '/',
      active: this.currentRoute == '/' ? 'active' : '',
      icon: "fa fa-tachometer",
    },
    {
      title: 'Paineis',
      route: '/paineis',
      active: this.currentRoute == '/paineis' ? 'active' : '',
      icon: "fa fa-th-large",
    },
    {
      title: 'Equipes',
      route: '/equipes',
      active: this.currentRoute == '/equipes' ? 'active' : '',
      icon: "fa fa-users",
    },
    {
      title: 'Usuarios',
      route: '/usuarios',
      active: this.currentRoute == '/usuarios' ? 'active' : '',
      icon: "fa fa-user-o",
    },
    {
      title: 'Clientes',
      route: '/clientes',
      active: this.currentRoute == '/clientes' ? 'active' : '',
      icon: "fa fa-handshake-o",
    },
    {
      title: 'Configurações',
      route: '/configuracoes',
      active: this.currentRoute == '/configuracoes' ? 'active' : '',
      icon: "fa fa-cogs",
    },
  ];          

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });

    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {    
    
  }
}
