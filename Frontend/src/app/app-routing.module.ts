import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "cursos", component: CursosComponent },
  { path: "cadastrar-curso", component: CadastrarCursoComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "notfound", component: NotfoundComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
