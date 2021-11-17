import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CursoService {



  constructor(
    private http: HttpClient
  )
  {

  }

  obterCursos() {
    return this.http.get (environment.EnderecoAPI + '/Cursos');
  }

}
