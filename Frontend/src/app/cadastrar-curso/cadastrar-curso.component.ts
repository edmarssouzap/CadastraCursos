import { Component, OnInit } from '@angular/core';

import { Curso } from '../shared/model/curso.model';
import { Categoria } from './../shared/model/categoria.model';
import { CategoriaService } from '../shared/services/categoria.service';


@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  listaCategoria: any;

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.listandoCategorias();
  }

  listandoCategorias(): void {
     this.categoriaService.obterCategoria();
  }
}
