import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../interfaces/Projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  private apiUrl = `${environment.apiUrl}/projetos`

  constructor(private http: HttpClient) { }

  get(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl);
  }

  show(id: number): Observable<Projeto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Projeto>(url);
  }

  create(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  update(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  delete(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
