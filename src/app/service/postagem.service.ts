import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';
import { ThrowStmt } from '@angular/compiler';

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

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://magisternetwork.herokuapp.com/postagem', this.token)

  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://magisternetwork.herokuapp.com/postagem',postagem, this.token)
  }





}
