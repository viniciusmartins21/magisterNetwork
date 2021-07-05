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
import { OdsComponent } from './ods/ods.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { RodapeTecnologiasComponent } from './rodape-tecnologias/rodape-tecnologias.component';
import { DevsDescricaoComponent } from './devs-descricao/devs-descricao.component';





@NgModule({
  declarations: [
    AppComponent,
    PaginainicialComponent,
    RodapeComponent,
    LoginComponent,
    MenuComponent,
    CadastroComponent,
    OdsComponent,
    IntegrantesComponent,
    RodapeTecnologiasComponent,
    DevsDescricaoComponent
  ],




  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
