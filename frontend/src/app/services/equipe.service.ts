import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../inetrfaces/Response';
import { Equipe } from '../inetrfaces/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private apiUrl = `${environment.apiUrl}/api/equipes`

  constructor(private http: HttpClient) { }

  getEquipes(): Observable<Response<Equipe[]>> {
    return this.http.get<Response<Equipe[]>>(this.apiUrl);
  }

  getEquipe(id: number): Observable<Response<Equipe>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Equipe>>(url);
  }

  createEquipe(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  updateEquipe(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  deleteEquipe(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
