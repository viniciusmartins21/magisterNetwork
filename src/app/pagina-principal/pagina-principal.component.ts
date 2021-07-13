import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { AlertasService } from '../service/alertas.service';
import { ComentarioService } from '../service/comentario.service';
import { Comentario } from '../model/Comentario';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  user: User = new User()
  idUser = environment.id


  profissao = environment.profissao
  foto = environment.foto
  nome = environment.nome
  fotoCapa = environment.fotoCapa

  comentario: Comentario = new Comentario()
  listaComentario: Comentario[]
  idComentario: number

  key = 'data'
  reverse = true


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService,
    private comentarioService: ComentarioService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    /* refresh sempre antes (refresh postagem e tema) */
    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.comentarioService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()



    this.findAllTemas()
    this.findAllComentario()

  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }
  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!', 'success')
      this.postagem = new Postagem
      this.getAllPostagens()
    })

  }

  findByTituloPostagem() {

    if (this.tituloPost == '') {
      this.getAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema() {
    if (this.nomeTema == '') {
      this.getAllTemas()
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }

  }

  findAllComentario() {
    this.comentarioService.getAllComentario().subscribe((resp: Comentario[]) => {
      this.listaComentario = resp
    })
  }

  findByIdComentario() {
    this.comentarioService.getByIdComentario(this.idComentario).subscribe((resp: Comentario) => {
      this.comentario = resp
    })
  }

  comentar(id: number) {
    this.user.id = environment.id
    this.comentario.usuario = this.user
    this.postagem.id = id
    this.comentario.postagem = this.postagem
    this.comentarioService.postComentario(this.comentario).subscribe((resp: Comentario) => {
      this.comentario = resp
      this.comentario = new Comentario
      this.getAllPostagens()
    })
  }


}
