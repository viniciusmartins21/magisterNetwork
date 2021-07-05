import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  token = environment.token
  id = environment.id


  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/paginainicial'])
    environment.token=''
    environment.nome=''
    environment.foto=''
    environment.id= 0
  }


}
