import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id : 0,
    conteudo: '',
    autor: '',
    modelo: '',
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) {}

  criarPensamento() {
    this.pensamentoService.create(this.pensamento).subscribe();
    this.router.navigateByUrl('/pensamentos');
  }

  ngOnInit() {}
}
