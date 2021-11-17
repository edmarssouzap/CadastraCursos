import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/categoria.model';
import { Curso } from '../model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarCursoService {

  dadosCategoria: Categoria;
  dadosCurso: Curso;

  constructor(
    private http: HttpClient
  ) {
    this.dadosCategoria = {} as Categoria;
    this.dadosCurso = {} as Curso;
  }

  deletandoCurso(id: number) {
    return this.http.get (environment.EnderecoAPI + '/Cursos' + id)
  }

  cadastrandoCurso() {
      return this.http.post(environment.EnderecoAPI + '/Cursos', this.dadosCurso);
  }

}
