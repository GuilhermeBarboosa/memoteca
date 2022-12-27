import { PensamentoService } from './../../services/pensamento.service';
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
    favorito: false,
    id: 0
  }

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit() {
  }

  larguraPensamento(): String{
   if(this.pensamento.conteudo.length >= 256){
    return 'pensamento-g';
   }else{
    return 'pensamento-p';
   }
  }

  mudarIconeFavorito(): String{
    if(this.pensamento.favorito){
      return 'ativo';
    }else{
      return 'inativo';
    }
  }

  atualizarFavorito(): void{
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe();
  }
}
