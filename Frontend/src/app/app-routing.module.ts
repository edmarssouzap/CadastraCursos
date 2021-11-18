import { ListagemLogComponent } from './listagem-log/listagem-log.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cursos", component: CursosComponent },
  { path: "cadastrar-curso", component: CadastrarCursoComponent },
  { path: "home", component: HomeComponent },
  { path: "notfound", component: NotfoundComponent },
  { path: "listagem-log", component: ListagemLogComponent },
  { path: 'edit/:id', component: CursosComponent }, // - /cursos/edit/1
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
