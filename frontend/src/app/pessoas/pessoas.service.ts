import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Pessoa } from './pessoa.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private apiUrl = `${environment.apiUrl}/api/paineis`

  constructor(private http: HttpClient) { }

  getPaineis(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  getPainel(id: number): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pessoa>(url);
  }

  createPaienl(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  updatePainelt(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  deletePainel(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
