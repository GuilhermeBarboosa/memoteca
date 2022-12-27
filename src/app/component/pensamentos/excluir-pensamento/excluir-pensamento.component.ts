import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css'],
})
export class ExcluirPensamentoComponent implements OnInit {
  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  pensamento: Pensamento = {
    conteudo: '',
    autor: '',
    modelo: '',
    favorito: false,
  };

  excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.delete(this.pensamento.id!).subscribe();
      this.router.navigateByUrl('/listar-pensamento');
    }
  }

  fecharModal() {
    this.router.navigateByUrl('/listar-pensamento');
  }

  ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.pensamentoService.getById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
}
