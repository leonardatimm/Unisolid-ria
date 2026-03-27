import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OngService {
  private apiUrl = 'http://localhost:8080/api/ongs';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Adicionando o método de POST
  salvar(ong: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ong);
  }

  // Adicionando o método de DELETE (que bate com o seu @DeleteMapping("/{id}"))
  deletar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}