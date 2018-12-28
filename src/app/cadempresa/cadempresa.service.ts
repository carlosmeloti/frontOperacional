
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';


export interface cadempresaFiltro {
  nmEmpresa : string;
}


@Injectable()
export class CadempresaService {

  cadempresaurl = 'http://localhost:8080/cadempresa';

  constructor(private http: Http) { }


  pesquisar(filtro: cadempresaFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmEmpresa){
      params.set('nmEmpresa', filtro.nmEmpresa);
    }

    return this.http.get(`${this.cadempresaurl}`, {  headers, search: filtro })
      .toPromise()
      .then(response => response.json())


    };

}
