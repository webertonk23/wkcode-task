import { Component, OnInit } from '@angular/core';

import { ToastService } from './../../servicos/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit{
  toastMessage: string | null = null;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe((message) => {
      this.toastMessage = message;

      setTimeout(() => {
        this.toastMessage = null;
      }, 5000);
    });
  }
}
