import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Sprint } from '../interfaces/Sprint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {
  private apiUrl = `${environment.apiUrl}/projetos`

  constructor(private http: HttpClient) { }

  get(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.apiUrl);
  }

  show(id: number): Observable<Sprint> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Sprint>(url);
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
