import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/IUsuarios';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  logar(formLogin: IUsuario): Observable<any> {
    return this.http.post<any>(apiUrl + "/auth/login", formLogin).pipe(
      tap((response) => {
        const token = response['access_token'];
        if (token) {
          localStorage.setItem('token', btoa(JSON.stringify(token)));
          this.router.navigate(['']);
          return true;
        }else{
          return;
        }        
      }));
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  refresh(): Observable<any> {
    return this.http.post<any>(apiUrl + "/auth/refresh", {}).pipe(
      tap((response) => {
        const token = response['access_token'];
        console.log(response);
        if (token) {
          localStorage.setItem('token', btoa(JSON.stringify(token)));
        }else{
          this.deslogar();
          throwError('Unauthorized');
        }        
      }));
  }

  // get obterUsuarioLogado(): IUsuario {
  //   // return localStorage.getItem('usuario')
  //   //   ? JSON.parse(atob(localStorage.getItem('usuario')))
  //   //   : null;
  // }
  // get obterIdUsuarioLogado(): string {
  //   return localStorage.getItem('usuario')
  //     ? (JSON.parse(atob(localStorage.getItem('usuario'))) as IUsuario).id
  //     : null;
  // }
  get obterTokenUsuario(): string | null {
    const token = localStorage.getItem('token');

    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')!))
      : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
