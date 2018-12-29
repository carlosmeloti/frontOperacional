import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

export interface cadamostragemFiltro {
  nmamostragem : string;
}

@Injectable()
export class CadamostragemService {

  cadamostragemurl = 'http://localhost:8080/cadamostragem';

  constructor(private http: Http) { }

  pesquisar(filtro: cadamostragemFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmamostragem){
      params.set('nmamostragem', filtro.nmamostragem);
    }

    return this.http.get(`${this.cadamostragemurl}?resumo`, {  headers, search: filtro })
      .toPromise()
      .then(response => response.json().content)
    };
}
