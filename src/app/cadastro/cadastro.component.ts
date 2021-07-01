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

  user: User = new User
  confirmaSenha: string 
  tipoUsuario: string 


  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll (0,0)
    



  }



}
