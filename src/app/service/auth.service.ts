import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient

  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${environment.uri}/usuarios/logar`, userLogin)

  }
  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(`${environment.uri}/usuarios/cadastrar`, user)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.uri}/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false
    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}
