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

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit() {
    this.pensamentoService.getAll().subscribe(response =>{
      this.listaPensamentos = response;
    }, Error =>{
      console.log("Ocooreu um erro ao listar os pensamentos");
    });
  }
}
