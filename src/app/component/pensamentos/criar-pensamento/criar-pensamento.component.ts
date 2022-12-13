import { PensamentoService } from './../../../services/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {

    formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autor: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(50)
      ])],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    console.log(this.formulario);
    if(this.formulario.valid){
      this.pensamentoService.create(this.formulario.value).subscribe(() => {
        this.router.navigateByUrl('/listar-pensamento');
      });
    }

  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao';
    }else{
      return 'botao__desabilitado';
    }
  }

}
