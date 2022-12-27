import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formulario!: FormGroup;

  constructor(private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }



  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService.getById(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: pensamento.id,
        conteudo: [pensamento.conteudo, Validators.compose([ Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/), ])],
        autor: [pensamento.autor, Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(50) ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito],
      });
    });
  }

  editarPensamento(){
    this.pensamentoService.update(this.formulario.value).subscribe(() =>{
      this.router.navigateByUrl('/listar-pensamento');
    });
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao';
    }else{
      return 'botao__desabilitado';
    }
  }
}
