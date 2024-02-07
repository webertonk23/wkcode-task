import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from '../interfaces/Pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private apiUrl = `${environment.apiUrl}/pessoas`

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.apiUrl);
  }

  getPessoa(id: number): Observable<Pessoas> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pessoas>(url);
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

  getClientes(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(`${this.apiUrl}/clientes`);
  }

  getFuncionarios(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(`${this.apiUrl}/funcionarios`);
  }
}
