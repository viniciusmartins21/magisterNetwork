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
  /*solução minhas postagens
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  solução minhas postagens*/
  constructor(
    private http: HttpClient

  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://magisternetwork.herokuapp.com/usuarios/logar', userLogin)

  }
  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://magisternetwork.herokuapp.com/usuarios/cadastrar', user)
  }

  /*solução minhas postagens (this.token)*/
  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://magisternetwork.herokuapp.com/usuarios/${id}`)
  }
  /*solução minhas postagens (this.token)*/

  logado(){
    let ok: boolean = false
    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}
