import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin ()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.authService.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp 

      environment.nome = this.userLogin.nome
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.email = this.userLogin.email

      console.log(environment.nome)
      console.log( environment.token)
      console.log(environment.foto)
      console.log(environment.id)
      console.log(environment.email)


      this.userLogin.foto

      this.router.navigate(['/tema'])
    },erro => {
      if(erro.status == 500) {
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
}
