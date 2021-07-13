import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../model/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(
    private http: HttpClient
    ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getByIdComentario(id: number): Observable<Comentario>{
    return this.http.get<Comentario>(`https://magisternetwork.herokuapp.com/comentarios/${id}`, this.token)
  }

  getAllComentario(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>('https://magisternetwork.herokuapp.com/comentarios', this.token)

  }

  postComentario(comentario: Comentario): Observable<Comentario>{
    return this.http.post<Comentario>('https://magisternetwork.herokuapp.com​/comentarios', comentario, this.token)
  }

  putComentario(comentario: Comentario): Observable<Comentario>{
    return this.http.put<Comentario>('https://magisternetwork.herokuapp.com/comentarios', comentario, this.token)
  }

  deleteComentario(id: number){
    return this.http.delete(`https://magisternetwork.herokuapp.com/comentarios/${id}`, this.token)
  }


}
