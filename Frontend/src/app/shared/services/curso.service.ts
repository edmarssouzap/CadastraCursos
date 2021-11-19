import { Injectable } from '@angular/core';
import { Curso } from '../model/curso.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) {  }

  editarCurso(id: number) {
    return this.http.get(environment.EnderecoAPI + '/Cursos/' + id)
  }

  deletarCurso(id: number) {
    return this.http.delete(environment.EnderecoAPI + '/Cursos/' + id)
  }

  obterCursos() {
    return this.http.get (environment.EnderecoAPI + '/Cursos');
  }

}
