import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Status } from '../interfaces/Status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = `${environment.apiUrl}/status`

  constructor(private http: HttpClient) { }

  get(): Observable<Status[]> {
    return this.http.get<Status[]>(this.apiUrl);
  }

  show(id: number): Observable<Status> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Status>(url);
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
