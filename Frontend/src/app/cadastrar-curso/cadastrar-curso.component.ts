import { Component, OnInit } from '@angular/core';

import { Categoria } from './../shared/model/categoria.model';
import { CategoriaService } from '../shared/services/categoria.service';
import { CadastrarCursoService } from '../shared/services/cadastrar-curso.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  dadosCategoria: Categoria; // Dados do form
  listaCategorias: any; // Lista obtida pelo servidor vem parar AQUI
  dataAtual = new Date();


  constructor(
    private categoriaService: CategoriaService, // Serviço com a lista para puxar as categorias
    public cadastrarCurso: CadastrarCursoService, // Servico para enviar a requisicao ao servidor API
    public toastr: ToastrService
  )
  {
    this.dadosCategoria = {} as Categoria;
  }

  ngOnInit(): void {
    this.listandoCategorias();
  }

  enviandoDados(form: NgForm): void {
    if (form.valid) {
      this.cadastrarCurso.cadastrandoCurso().subscribe((res) => {
        console.log (res);
        this.toastr.success("Enviado com sucesso.", "CursosCast");
    });
    } else {
      console.log (this.cadastrarCurso.dadosCurso);
      this.toastr.toastrConfig;
      this.toastr.error("Erro ao enviar os dados.", "CursosCast");
    }
  }

  listandoCategorias(): void {
     this.categoriaService.obterCategoria().subscribe(res => (
         this.listaCategorias = res
     ));
  }
}
