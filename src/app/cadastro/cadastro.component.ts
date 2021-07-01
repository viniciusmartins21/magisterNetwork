import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  
})
export class CadastroComponent implements OnInit {

  user: User = new User ()
  confirmarSenha: string 
  //tipoUsuario: string 


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll (0,0)

  }

  confirmSenha(event: any) { 
    this.confirmarSenha = event.target.value
  }

 //tipoUser(event: any) {
// this.tipoUsuario = event.target.value
//}

  cadastrar() {

    if (this.user.senha != this.confirmarSenha) {
      alert ('As senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User)=> {
        this.user = resp 
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')

      })
    }

  }


}
