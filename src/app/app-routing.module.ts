import { EditarPensamentoComponent } from './component/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './component/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentosComponent } from './component/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './component/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
  { path: 'listar-pensamento', component: ListarPensamentosComponent },
  { path: 'pensamentos/excluir-pensamento/:id', component: ExcluirPensamentoComponent },
  { path: 'pensamentos/editar-pensamento/:id', component: EditarPensamentoComponent },
  { path: '', redirectTo: 'listar-pensamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
