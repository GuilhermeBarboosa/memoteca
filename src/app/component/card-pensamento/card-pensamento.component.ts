import { Pensamento } from './../pensamentos/pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  @Input() pensamento :Pensamento = {
    conteudo: "",
    autor: "",
    modelo: "",
    id: 0
  }

  constructor() { }

  ngOnInit() {
  }

  larguraPensamento(): String{
   if(this.pensamento.conteudo.length >= 256){
    return 'pensamento-g';
   }else{
    return 'pensamento-p';
   }
  }

}
