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

//importe para sanitizar vídeo:
import { DomSanitizer } from '@angular/platform-browser';


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

  //var criadas pra remanejamento de tipos diferentes de midia:
  midiaFoto = false
  midiaVideo = false

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService,
    //importe para sanitizar vídeo:
    private sanitizer: DomSanitizer,
    private comentarioService: ComentarioService
  ) { }


  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    // método refresh sempre antes dos demais (refresh postagem e tema):
    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.comentarioService.refreshToken()
    this.getAllPostagens()
    this.findAllTemas()
    this.findAllComentario()
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  //Método modificado para exibir vídeos do youtube ou fotos nas minhas postagens:
  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      resp.postagem.forEach((item) => {
        if(item.midia.indexOf('youtube') != -1){
          item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.midia)
        } else {
          item.foto = item.midia
        }
      })
      this.user = resp
    })
  }

  //Método modificado para exibir vídeos do youtube ou fotos em todas as postagens:
  getAllPostagens() {
    this.listaPostagens = []
    this.midiaFoto = false
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      resp.forEach((item) => {
        if(item.midia.indexOf('youtube') != -1){
          item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.midia)
        } else {
          item.foto = item.midia
        }
        this.listaPostagens.push(item)
      })

    })
  }

  //Método modificado para exibir vídeos do youtube ou fotos nas postagens por tema:
  findAllTemas() {
    this.listaTemas = []
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {

      resp.forEach((tema) => {
        tema.postagem.forEach((item) => {
          if(item.midia.indexOf('youtube') != -1){
            item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.midia)
          } else {
            item.foto = item.midia
          }
        })
        this.listaTemas.push(tema)
      })
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
      this.findAllTemas()
    })

  }
  
  // findByTituloPostagem() {

  //   if (this.tituloPost == '') {
  //     this.getAllPostagens()
  //   } else {
  //     this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
  //       this.listaPostagens = resp
  //     })
  //   }
  // }

  // findByNomeTema() {
  //   if (this.nomeTema == '') {
  //     this.findAllTemas()
  //   } else {
  //     this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
  //       this.listaTemas = resp
  //     })
  //   }

  // }

  findByTituloPostagem() {

    if (this.tituloPost == '') {
      this.getAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
         this.listaPostagens = resp
          //for pra sanitifazer midia de vídeo
          resp.forEach((item) => {
          if(item.midia.indexOf('youtube') != -1){
            item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.midia)
          } else {
            item.foto = item.midia
          }
          //for pra sanitifazer midia de vídeo
        })
      })
    }
  }

  findByNomeTema() {
    if (this.nomeTema == '') {
      this.findAllTemas()
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
        //for pra sanitifazer midia de vídeo
        resp.forEach((tema) => {
          tema.postagem.forEach((item) => {
            if(item.midia.indexOf('youtube') != -1){
              item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.midia)
            } else {
              item.foto = item.midia
            }
          })
        })
        //for pra sanitifazer midia de vídeo
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
      this.findAllTemas()
    })
  }

}
