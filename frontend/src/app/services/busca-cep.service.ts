import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }

  get(cep: string): Observable<any> {
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<any>(url);
  }
}
