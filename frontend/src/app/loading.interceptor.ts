import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingService } from './servicos/loading.service';

// export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

//   return next(req);
// };

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoading();

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
  }
}
