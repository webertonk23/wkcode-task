import { PageTitleService } from './../../servicos/page-title.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  pageTitle: string = '';

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.title$.subscribe((title) => this.pageTitle = title);
  }
}
