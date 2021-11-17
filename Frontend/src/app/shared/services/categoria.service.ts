import { Injectable } from '@angular/core';

import { Categoria } from '../model/categoria.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient,
  ) { }

  obterCategoria () {
    return this.http.get (environment.EnderecoAPI + '/Categorias');
  }
}
