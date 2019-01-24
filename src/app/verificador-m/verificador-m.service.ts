import { Injectable } from '@angular/core';
import { Verificador_m } from '../core/model';
import { Http, Headers } from '@angular/http';

export class CadverificadorFiltro{
  nmTipoVerificador : string;

}

@Injectable()
export class VerificadorMService {

  cadverificadormURL = 'http://localhost:8080/verificador_m';



  constructor(private http: Http) { }

  pesquisar(): Promise<any> {

    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


    return this.http.get(`${this.cadverificadormURL}`, {  headers })
    .toPromise()
      .then(response => response.json());

    }




}
