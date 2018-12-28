import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

export interface cadniveldeavaliacaoFiltro {
  nmnivelavaliacao : string;
}

@Injectable()
export class CadniveldeavaliacaoService {

  cadniveldeavaliacaourl = "localhost:8080/cadnivelavaliacao";
  constructor(private http : Http) { }

  pesquisar(filtro: cadniveldeavaliacaoFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmnivelavaliacao){
      params.set('nmnivelavaliacao', filtro.nmnivelavaliacao);
    }

    return this.http.get(`${this.cadniveldeavaliacaourl}`, {  headers, search: filtro })
      .toPromise()
      .then(response => response.json())


    };
}
