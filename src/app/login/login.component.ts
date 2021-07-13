import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.authService.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.nome = this.userLogin.nome
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.email = this.userLogin.email
      environment.profissao = this.userLogin.profissao
      environment.fotoCapa = this.userLogin.fotoCapa

      console.log(environment.nome)
      console.log(environment.token)
      console.log(environment.foto)
      console.log(environment.id)
      console.log(environment.email)
      console.log(environment.profissao)


      this.userLogin.foto

      this.router.navigate(['/pagina-principal'])
    }, erro => {
      if (erro.status == 500) {
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!', 'danger')
      }
    })
  }
}
