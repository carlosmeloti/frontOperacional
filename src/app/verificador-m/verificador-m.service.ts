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

    pesquisarMon(): Promise<any> {

    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


    return this.http.get(`${this.cadverificadormURL}?nmTipoVerificador=Mon`, {  headers })
    .toPromise()
      .then(response => response.json());

    }
    pesquisarImp(): Promise<any> {

      const headers = new Headers;

      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


      return this.http.get(`${this.cadverificadormURL}?nmTipoVerificador=Impac`, {  headers })
      .toPromise()
        .then(response => response.json());

      }

      pesquisarPMFS(): Promise<any> {

        const headers = new Headers;

        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


        return this.http.get(`${this.cadverificadormURL}?nmTipoVerificador=PMFS`, {  headers })
        .toPromise()
          .then(response => response.json());

        }
        pesquisarCerti(): Promise<any> {

          const headers = new Headers;

          headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


          return this.http.get(`${this.cadverificadormURL}?nmTipoVerificador=Certi`, {  headers })
          .toPromise()
            .then(response => response.json());

          }

          pesquisarSuste(): Promise<any> {

            const headers = new Headers;

            headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


            return this.http.get(`${this.cadverificadormURL}?nmTipoVerificador=Suste`, {  headers })
            .toPromise()
              .then(response => response.json());

            }




}
