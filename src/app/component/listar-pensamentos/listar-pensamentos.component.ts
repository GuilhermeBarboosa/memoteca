import { Router } from '@angular/router';
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
  favorito: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu mural';

  constructor(private pensamentoService: PensamentoService,
              private router: Router) { }

  ngOnInit() {
    this.pensamentoService.getAll(this.paginaAtual, this.filtro, this.favorito).subscribe(response => {
      this.listaPensamentos = response;
    }, Error => {
      console.log("Ocorreu um erro ao listar os pensamentos");
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.getAll(++this.paginaAtual, this.filtro, this.favorito).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamento(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.getAll(this.paginaAtual, this.filtro, this.favorito).subscribe(response => {
      this.listaPensamentos = response;
    }, Error => {
      console.log("Ocorreu um erro ao listar os pensamentos");
    });
  }

  listarFavoritos(){
    this.titulo = 'Favoritos';
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.favorito = true;
    this.pensamentoService.getAll(this.paginaAtual, this.filtro, this.favorito).subscribe(response => {
      this.listaPensamentos = response;
      this.listaFavoritos = response;
    }, Error => {
      console.log("Ocorreu um erro ao listar os pensamentos");
    });
  }

  recarregarComponente(){
    this.titulo = 'Meu mural';
    this.favorito = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
