import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModNivel2 } from '../core/model';


export class Modnivel2Filtro{

  nmNivel1 : string;
  codigo : string;
  page = 0;
  size = 5;
  cdNivel1: any;
}

@Injectable()
export class Modnivel2Service {

  modnivel2URL = 'http://10.132.90.58:8080/modnivel2';


  constructor(private http: Http) { }

  pesquisarNivel2(filtro: Modnivel2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modnivel2URL}?cdNivel1=1`, {  headers })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modnivel2 = responseJson.content;

          const resultado = {
            modnivel2,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };

    excluir(cdNivel2: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modnivel2URL}/${cdNivel2}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(modnivel2: ModNivel2): Promise<ModNivel2>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modnivel2URL, JSON.stringify(modnivel2), { headers })
        .toPromise()
        .then(response => response.json());
    }

    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modnivel2URL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(modnivel2: ModNivel2): Promise<ModNivel2>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.modnivel2URL}/${modnivel2.cdNivel2}`,
         JSON.stringify(modnivel2), { headers })
       .toPromise()
       .then(response => {
         const modnivel2Alterada = response.json() as ModNivel2;


         return modnivel2Alterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<ModNivel2> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.modnivel2URL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const modnivel2 = response.json() as ModNivel2;

         return modnivel2;
       });
 }

}
