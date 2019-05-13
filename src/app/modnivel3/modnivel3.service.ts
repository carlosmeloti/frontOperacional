import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModNivel3 } from '../core/model';



export class Modnivel3Filtro{

  nmNivel1 : string;
  nmNivel2 : string;
  codigo : string;
  page = 0;
  size = 5;
  cdNivel1: any;
  cdNivel2: any;
}

@Injectable()
export class Modnivel3Service {

  modnivel3URL = 'http://localhost:8091/modnivel3';


  constructor(private http: Http) { }



  pesquisarNivel31(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modnivel3URL}?cdNivel2=1`, {  headers })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modnivel3 = responseJson.content;

          const resultado = {
            modnivel3,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    pesquisarNivel32(filtro: Modnivel3Filtro): Promise<any> {

      const params = new URLSearchParams;
      const headers = new Headers;

      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



     return this.http.get(`${this.modnivel3URL}?cdNivel2=2`, {  headers })
      .toPromise()
        .then(response => {

            const responseJson = response.json();
            const modnivel3 = responseJson.content;

            const resultado = {
              modnivel3,
              total: responseJson.totalElements
            };
            return resultado;
      })

      };
      pesquisarNivel33(filtro: Modnivel3Filtro): Promise<any> {

        const params = new URLSearchParams;
        const headers = new Headers;

        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



        return this.http.get(`${this.modnivel3URL}?cdNivel2=3`, {  headers })
        .toPromise()
          .then(response => {

              const responseJson = response.json();
              const modnivel3 = responseJson.content;

              const resultado = {
                modnivel3,
                total: responseJson.totalElements
              };
              return resultado;
        })

        };
        pesquisarNivel34(filtro: Modnivel3Filtro): Promise<any> {

          const params = new URLSearchParams;
          const headers = new Headers;

          headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



          return this.http.get(`${this.modnivel3URL}?cdNivel2=4`, {  headers })
          .toPromise()
            .then(response => {

                const responseJson = response.json();
                const modnivel3 = responseJson.content;

                const resultado = {
                  modnivel3,
                  total: responseJson.totalElements
                };
                return resultado;
          })

          };

    excluir(cdNivel3: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modnivel3URL}/${cdNivel3}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(modnivel3: ModNivel3): Promise<ModNivel3>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modnivel3URL, JSON.stringify(modnivel3), { headers })
        .toPromise()
        .then(response => response.json());
    }

    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modnivel3URL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   listarTodasPreExplo(): Promise<any> {
    const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.get(`${this.modnivel3URL}?cdNivel2=1`, { headers })
       .toPromise()
       .then(response => response.json().content);
 }

    listarTodasExplo(): Promise<any> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.get(`${this.modnivel3URL}?cdNivel2=2`, { headers })
        .toPromise()
        .then(response => response.json().content);
    }
    listarTodasPosExplo(): Promise<any> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.get(`${this.modnivel3URL}?cdNivel2=3`, { headers })
        .toPromise()
        .then(response => response.json().content);
    }

   atualizar(modnivel3: ModNivel3): Promise<ModNivel3>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.modnivel3URL}/${modnivel3.cdNivel3}`,
         JSON.stringify(modnivel3), { headers })
       .toPromise()
       .then(response => {
         const modnivel3Alterada = response.json() as ModNivel3;


         return modnivel3Alterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<ModNivel3> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.modnivel3URL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const modnivel3 = response.json() as ModNivel3;

         return modnivel3;
       });
 }
}
