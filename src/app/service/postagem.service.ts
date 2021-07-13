import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';
import { ThrowStmt } from '@angular/compiler';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`${environment.uri}/postagem/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${environment.uri}/postagem/titulo/${titulo}`, this.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${environment.uri}/postagem`, this.token)

  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${environment.uri}/postagem`, postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`${environment.uri}/postagem`, postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`${environment.uri}/postagem/${id}`, this.token)
  }

}
