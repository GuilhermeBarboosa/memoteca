import { Pensamento } from './../component/pensamentos/pensamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpCliente: HttpClient) {}

  getAll(): Observable<Pensamento[]> {
    return this.httpCliente.get<Pensamento[]>(this.API);
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
