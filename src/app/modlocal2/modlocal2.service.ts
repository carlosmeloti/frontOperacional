import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Modlocal2 } from '../core/model';


export class Modlocal2Filtro{
  nmlocal2 : string;
  page = 0;
  size = 5;
}

@Injectable()
export class Modlocal2Service {
  modlocal2URL = 'http://localhost:8080/localdeavaliacao';


  constructor(private http: Http) { }

  pesquisarLocal(modlocal2: Modlocal2): Promise<Modlocal2>{
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=${modlocal2.modlocal1.codigo}`, {  headers })
      .toPromise()
        .then(response => response.json());

  
  }
  pesquisar(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmlocal2){
      params.set('nmlocal2', filtro.nmlocal2);

  }

    return this.http.get(`${this.modlocal2URL}?cdLocal1=`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modlocal2 = responseJson.content;

          const resultado = {
            modlocal2,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modlocal2URL}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(modlocal2: Modlocal2): Promise<Modlocal2>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modlocal2URL, JSON.stringify(modlocal2), { headers })
        .toPromise()
        .then(response => response.json());
    }
    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modlocal2URL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(modlocal2: Modlocal2): Promise<Modlocal2>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.modlocal2URL}/${modlocal2.codigo}`,
         JSON.stringify(modlocal2), { headers })
       .toPromise()
       .then(response => {
         const modlocal2Alterada = response.json() as Modlocal2;


         return modlocal2Alterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Modlocal2> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.modlocal2URL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const modlocal2 = response.json() as Modlocal2;

         return modlocal2;
       });
 }
}
