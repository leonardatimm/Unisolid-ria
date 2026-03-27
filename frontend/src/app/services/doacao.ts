import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardDTO {
  totalDoacoes: number;
  totalItens: number;
  categoriasAtivas: number;
}

@Injectable({ providedIn: 'root' })
export class DoacaoService {
  private apiUrl = 'http://localhost:8080/api/doacoes'; 

  constructor(private http: HttpClient) { }

  getEstatisticas(): Observable<DashboardDTO> {
    return this.http.get<DashboardDTO>(`${this.apiUrl}/estatisticas`);
  }

  listarTodas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  salvar(doacao: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, doacao);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}