import { ToastrService } from 'ngx-toastr';
import { CursoService } from './../shared/services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../shared/model/curso.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  public userId: any;

  constructor(
      private cursoService: CursoService,
      private toastr: ToastrService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.listandoCursos();

    // this.route.params.subscribe(params =>
    //   this.userId = params['id']
    //   );
  }

  atualizarListagemCurso() {
    this.listandoCursos();
  }

  deletarCurso(curso: any) {
    if (confirm('Você deseja deletar esse curso?')) {
        this.cursoService.deletarCurso(curso).subscribe((res: any) => {
        this.atualizarListagemCurso();
        this.toastr.warning("Pedido deletado com sucesso.", "CursosCast");
      })
    }
  }

  editandoCurso(id: number) {
    // Corpo para um PUT bem-sucedido (Testado com o postman)
    /* var body = {
        cursoId: 2,
        nome: "string",
        dataInicio: "2021-11-19T08:09:35.970Z",
        dataFinal: "2021-11-19T08:09:35.970Z",
        qtdAlunosTurma: 0,
        desAssunto: "string",
        catId: 1
    } */

    this.cursoService.editarCurso(id).subscribe((res: any) => {
    this.listaCursos = res[0]
    });
    //this.router.navigate(['cadastrar-curso/', id]);
  }

  listandoCursos(): void {
    this.cursoService.obterCursos().subscribe((res: any) => {
      this.listaCursos = res;
    });
  }
}
