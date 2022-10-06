import { Router, ActivatedRoute } from '@angular/router';
import { Pensamento } from './../pensamento';
import { PensamentoService } from './../../../services/pensamento.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  constructor(private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    pensamento: Pensamento = {
      id : 0,
      conteudo: '',
      autor: '',
      modelo: '',
    };

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService.getById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  editarPensamento(){
    this.pensamentoService.update(this.pensamento).subscribe(() =>{
      this.router.navigateByUrl('/listar-pensamento');
    });
  }
}
