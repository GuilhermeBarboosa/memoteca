import { Pensamento } from './../component/pensamentos/pensamento';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpCliente: HttpClient) {}

  getAll(pagina: number, filtro: string): Observable<Pensamento[]> {

    const itensPorPagina = 4;

    let params = new HttpParams()
                .set("_page", pagina)
                .set("_limit", itensPorPagina);

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    return this.httpCliente.get<Pensamento[]>(this.API, {params});
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
   return this.update(pensamento);
  }

  create(pensamento: Pensamento): Observable<Pensamento>{
    return this.httpCliente.post<Pensamento>(this.API, pensamento);
  }

  delete(id: number): Observable<Pensamento>{
    return this.httpCliente.delete<Pensamento>(`${this.API}/${id}`);
  }

  getById(id: number): Observable<Pensamento>{
    return this.httpCliente.get<Pensamento>(`${this.API}/${id}`);
  }

  update(pensamento: Pensamento): Observable<Pensamento>{
    return this.httpCliente.put<Pensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }
}
