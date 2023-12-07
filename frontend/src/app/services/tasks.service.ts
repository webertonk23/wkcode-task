import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../inetrfaces/Response';
import { environment } from '../../environments/environment';
import { Task } from '../inetrfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = `${environment.apiUrl}/api/tasks`

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Response<Task[]>> {
    return this.http.get<Response<Task[]>>(this.apiUrl);
  }

  getTask(id: number): Observable<Response<Task>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Task>>(url);
  }

  createTask(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  updateTask(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  deleteTask(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
