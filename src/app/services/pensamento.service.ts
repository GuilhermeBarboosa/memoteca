import { Pensamento } from './../component/pensamentos/pensamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpCliente: HttpClient) {}

  getAll() {
    return this.httpCliente.get<Pensamento[]>(this.API);
  }
}
