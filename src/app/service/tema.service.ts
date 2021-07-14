import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${environment.uri}/tema`, this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${environment.uri}/tema/${id}`, this.token)
  }

  getByNomeTema(disciplinaTema: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${environment.uri}/tema/disciplinaTema/${disciplinaTema}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(`${environment.uri}/tema`, tema, this.token)

  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(`${environment.uri}/tema`, tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`${environment.uri}/tema/${id}`, this.token)
  }
}
