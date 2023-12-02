import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Painel } from '../inetrfaces/Painel';
import { Response } from '../inetrfaces/Response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  private apiUrl = `${environment.apiUrl}/api/paineis`

  constructor(private http: HttpClient) { }

  getPaineis(): Observable<Response<Painel[]>> {
    return this.http.get<Response<Painel[]>>(this.apiUrl);
  }

  getPainel(id: number): Observable<Response<Painel>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Painel>>(url);
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
