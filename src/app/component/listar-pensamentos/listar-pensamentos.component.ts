import { PensamentoService } from './../../services/pensamento.service';
import { Pensamento } from './../pensamentos/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit() {
    this.pensamentoService.getAll(this.paginaAtual, this.filtro).subscribe(response => {
      this.listaPensamentos = response;
    }, Error => {
      console.log("Ocorreu um erro ao listar os pensamentos");
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.getAll(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamento(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.getAll(this.paginaAtual, this.filtro).subscribe(response => {
      this.listaPensamentos = response;
    }, Error => {
      console.log("Ocorreu um erro ao listar os pensamentos");
    });
  }
}
