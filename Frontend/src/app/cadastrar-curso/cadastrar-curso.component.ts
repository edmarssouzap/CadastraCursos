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
  styleUrls: ['./cadastrar-curso.component.css'],
})
export class CadastrarCursoComponent implements OnInit {
  listaCategorias: Categoria[] = []; // Lista obtida pelo servidor vem parar AQUI
  listaCursos: Curso[] = [];

  // Data para limitar a criacao dos cursos
  dataHora = new Date().toISOString();
  dataAtual = this.dataHora.split('T');
  isValid: boolean = false;

  // Variavel para log
  UsuarioCast = 'Edmar';

  constructor(
    private categoriaService: CategoriaService, // Serviço com a lista para puxar as categorias
    public cadastrarCursoService: CadastrarCursoService, // Servico para enviar a requisicao ao servidor API
    public cursoService: CursoService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listandoCategorias();
  }

  // Verificar por que não retorna true para o template
  verificarCurso(nomeCurso:string) {
    this.listaCursos.forEach(function(curso) {
      if (curso.nome == nomeCurso) {
        console.log ("Edmar: " + curso.nome);
        // this.isValid = true;
      }
      // this.isValid = false;
    });
  }

  // NAO ESTA FUNCIONANDO (VERIFICAR)
  validarDataInicial() {
    console.log(this.dataAtual);
    if (this.cadastrarCursoService.modelCurso.dataInicio.toString() < this.dataAtual[0].toString()) {
        this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  validarDataFinal() {
    if (this.cadastrarCursoService.modelCurso.dataFinal < this.cadastrarCursoService.modelCurso.dataInicio) {
        this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  validarNumero(id: number) {
    if (id < 0) {
      //this.cadastrarCursoService.modelCurso.qtdAlunosTurma = 0;
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  enviandoDados(form: NgForm): void {
    if (form.valid) {
      this.cadastrarCursoService.cadastrandoCurso().subscribe(
        (resposta) => {
          console.log(form.status + ' = ' + resposta);
          this.toastr.success('Enviado com sucesso.', 'CursosCast');
          form.resetForm();
        },
        (err) => {
          console.log(err);
          if (err.error != String) {
            this.toastr.error(
              `Erro: "${err.error}".\n Status: ${err.status}\n\n StatusText: "${err.statusText}"`,
              'CursosCast');
            console.log(err);
          }
        }
      );
    } else {
      this.toastr.error('Erro: O formulário precisa ser totalmente preenchido.','CursosCast');
    }
  }

  listandoCursos(): void {
    this.cursoService
      .obterCursos()
      .subscribe((res: any) => (this.listaCursos = res));
  }

  listandoCategorias(): void {
    this.categoriaService
      .obterCategoria()
      .subscribe((res: any) => (this.listaCategorias = res));
  }
}
