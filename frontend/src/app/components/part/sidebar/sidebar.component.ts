import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    const segments = this.route.snapshot.url.map(segment => segment.path);  
  }
}
