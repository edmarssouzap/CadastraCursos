import { CursoService } from './../shared/services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../shared/model/curso.model';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Guarda a lista de propriedade e resposta da API
  listaCursos: Curso[] = [];

  // Variavel utilizada para ditar o tipo de retorno no filtro de pesquisa
  pesquisaNome: string = "";
  pesquisaData = new Date();

  // Variavel para pagina atual de paginação de dados
  paginaAtual = 1;

  constructor(
      private cursoService: CursoService,
    ) { }

  ngOnInit(): void {
    this.listandoCursos();
  }

  // Colocar Atualizar lista do banco dentro de deletarCurso

  deletarCurso(curso: any) {
    this.cursoService.deletarCurso(curso).subscribe((res: any) => {
      this.listaCursos = res;
    });
  }

  editarCurso(curso: any){
    console.log(curso);
  }

  listandoCursos(): void {
    this.cursoService.obterCursos().subscribe((res: any) => {
      this.listaCursos = res;
    });
  }

}
