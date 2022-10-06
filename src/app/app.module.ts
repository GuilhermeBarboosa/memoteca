import { EditarPensamentoComponent } from './component/pensamentos/editar-pensamento/editar-pensamento.component';
import { CardPensamentoComponent } from './component/card-pensamento/card-pensamento.component';
import { ListarPensamentosComponent } from './component/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './component/pensamentos/criar-pensamento/criar-pensamento.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
    CardPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
