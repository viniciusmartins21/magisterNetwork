import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialmagisternetworkComponent } from './inicialmagisternetwork/inicialmagisternetwork.component';
import { OdsComponent } from './ods/ods.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { RodapeTecnologiasComponent } from './rodape-tecnologias/rodape-tecnologias.component';
import { DevsDescricaoComponent } from './devs-descricao/devs-descricao.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { OrderModule } from 'ngx-order-pipe';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';






@NgModule({
  declarations: [
    AppComponent,
    PaginainicialComponent,
    RodapeComponent,
    LoginComponent,
    MenuComponent,
    CadastroComponent,
    InicialmagisternetworkComponent,
    OdsComponent,
    IntegrantesComponent,
    RodapeTecnologiasComponent,
    DevsDescricaoComponent,
    MenuLogadoComponent,
    PaginaPrincipalComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    AlertasComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
