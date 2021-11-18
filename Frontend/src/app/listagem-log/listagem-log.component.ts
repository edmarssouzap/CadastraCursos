import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-log',
  templateUrl: './listagem-log.component.html',
  styleUrls: ['./listagem-log.component.css']
})
export class ListagemLogComponent implements OnInit {

  pesquisaLog: string = "";

  paginaAtual: number = 1;

  listaLogs: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
