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
    ) {
      this.route.params.subscribe(params => this.userId = params['id']);
    }

  ngOnInit(): void {
    this.listandoCursos();
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

  editandoCurso() {
    this.router.navigateByUrl('cadastrar-curso/', this.userId);
  }

  listandoCursos(): void {
    this.cursoService.obterCursos().subscribe((res: any) => {
      this.listaCursos = res;
    });
  }
}
