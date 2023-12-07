import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Response } from '../inetrfaces/Response';
import { Categoria } from '../inetrfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = `${environment.apiUrl}/api/categorias`

  constructor(private http: HttpClient) { }

  getEquipes(): Observable<Response<Categoria[]>> {
    return this.http.get<Response<Categoria[]>>(this.apiUrl);
  }

  getCategoria(id: number): Observable<Response<Categoria>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Categoria>>(url);
  }

  createCategoria(formData: FormData): Observable<FormData> {    
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  updateCategoria(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  deleteCategoria(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
