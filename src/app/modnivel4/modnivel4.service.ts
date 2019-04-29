import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModNivel4 } from '../core/model';

export class Modnivel4Filtro{

  nmNivel1 : string;
  nmNivel2 : string;
  nmNivel3 : string;
  codigo : string;
  page = 0;
  size = 5;
  cdNivel1: any;
  cdNivel2: any;
  cdNivel3: any;
}

@Injectable()
export class Modnivel4Service {


  modnivel4URL = 'http://10.132.90.58:8080/modnivel4';


  constructor(private http: Http) { }

  pesquisarNivel41(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modnivel4URL}?cdNivel3=1`, {  headers })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modnivel4 = responseJson.content;

          const resultado = {
            modnivel4,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };

    excluir(cdNivel4: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modnivel4URL}/${cdNivel4}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(modnivel4: ModNivel4): Promise<ModNivel4>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modnivel4URL, JSON.stringify(modnivel4), { headers })
        .toPromise()
        .then(response => response.json());
    }

    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modnivel4URL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(modnivel4: ModNivel4): Promise<ModNivel4>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.modnivel4URL}/${modnivel4.cdNivel4}`,
         JSON.stringify(modnivel4), { headers })
       .toPromise()
       .then(response => {
         const modnivel4Alterada = response.json() as ModNivel4;


         return modnivel4Alterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<ModNivel4> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.modnivel4URL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const modnivel4 = response.json() as ModNivel4;

         return modnivel4;
       });
 }


}
