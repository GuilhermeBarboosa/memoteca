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

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit() {
    this.pensamentoService.getAll(this.paginaAtual).subscribe(response => {
      this.listaPensamentos = response;
    }, Error => {
      console.log("Ocooreu um erro ao listar os pensamentos");
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.getAll(++this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }
}
