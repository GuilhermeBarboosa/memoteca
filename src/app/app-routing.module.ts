import { ListarPensamentosComponent } from './component/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './component/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
  { path: 'listar-pensamento', component: ListarPensamentosComponent },
  { path: '', redirectTo: 'listar-pensamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
