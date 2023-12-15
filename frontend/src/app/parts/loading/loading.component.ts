import { Component } from '@angular/core';
import { LoadingService } from '../../servicos/loading.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  constructor(private loadingService: LoadingService){}

  get loading$(): Observable<boolean> {
    return this.loadingService.loading$;
  }
}
