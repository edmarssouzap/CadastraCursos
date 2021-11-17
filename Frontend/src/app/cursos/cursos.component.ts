import { CursoService } from './../shared/services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../shared/model/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  dadosCurso: Curso;
  listaCursos: any;

  constructor(
      private cursoService: CursoService,
    ) { this.dadosCurso = {} as Curso; }

  ngOnInit(): void {
    this.listandoCursos();
  }

  listandoCursos(): void {
     this.cursoService.obterCursos().subscribe(res => (
        //  this.listaCursos = res
        console.log (res)
     ));
  }

}
