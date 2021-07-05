import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DevsDescricaoComponent } from './devs-descricao/devs-descricao.component';
import { LoginComponent } from './login/login.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},

  {path: 'paginainicial', component: PaginainicialComponent},
  {path: 'devs-descricao', component: DevsDescricaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
