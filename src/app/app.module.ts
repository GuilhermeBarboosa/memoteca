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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BotaoCarregarMaisComponent } from './component/listar-pensamentos/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
    CardPensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarMaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
