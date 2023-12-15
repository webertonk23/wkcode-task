import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Pessoa } from '../../interfaces/pessoa.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private apiUrl = `${environment.apiUrl}/api/pessoas`

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  getPessoa(id: number): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pessoa>(url);
  }

  createPessoa(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  updatePessoa(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  deletePessoa(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
