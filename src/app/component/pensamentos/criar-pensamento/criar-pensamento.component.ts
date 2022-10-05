import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento:Pensamento = {
    id: 1,
    conteudo: "",
    autor: "",
    modelo: ""
  }

  constructor() { }

  criarPensamento(){
    alert("Pensamento criado com sucesso!");
  }

  ngOnInit() {

  }

}
