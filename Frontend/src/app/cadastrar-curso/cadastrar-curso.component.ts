import { Component, OnInit } from '@angular/core';

import { Categoria } from './../shared/model/categoria.model';
import { Curso } from '../shared/model/curso.model';

import { CategoriaService } from '../shared/services/categoria.service';
import { CursoService } from './../shared/services/curso.service';
import { CadastrarCursoService } from '../shared/services/cadastrar-curso.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  listaCategorias: Categoria[] = []; // Lista obtida pelo servidor vem parar AQUI
  listaCursos: Curso[] = [];

  // Data para limitar a criacao dos cursos
  dataHora = new Date().toISOString();
  dataAtual = this.dataHora.split('T');

  // Variavel para log
  UsuarioCast = "Edmar";

  constructor(
    private categoriaService: CategoriaService, // Serviço com a lista para puxar as categorias
    public cadastrarCursoService: CadastrarCursoService, // Servico para enviar a requisicao ao servidor API
    public cursoService: CursoService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.listandoCategorias();
  }

  validandoCampos(form: NgForm) {
    form.reset();
  }

  verificarNomeCurso() {
    if (this.cadastrarCursoService.modelCurso.nome) {

    }
  }

  enviandoDados(form: NgForm): void {
    if (form.valid) {
      this.cadastrarCursoService.cadastrandoCurso().subscribe((res) => {
        console.log(form.status + " = " + res);
        this.toastr.success("Enviado com sucesso.", "CursosCast");
        form.resetForm();
    });
    } else {
      this.toastr.toastrConfig;
      this.toastr.error("Erro ao enviar os dados.", "CursosCast");
    }
  }

  listandoCursos(): void {
    this.cursoService.obterCursos().subscribe((res: any) => (
      this.listaCursos = res
    ));
  }

  listandoCategorias(): void {
     this.categoriaService.obterCategoria().subscribe((res: any) => (
         this.listaCategorias = res
     ));
  }
}
