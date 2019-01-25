import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Cadniveldeavaliacao } from '../core/model';

export class CadniveldeavaliacaoFiltro {
  nmnivelavaliacao : string;
  page = 0;
  size = 5;
}

@Injectable()
export class CadniveldeavaliacaoService {

  cadniveldeavaliacaourl = "http://10.132.90.58:8080/cadniveldeavaliacao";
  constructor(private http : Http) { }

  pesquisar(filtro: CadniveldeavaliacaoFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());

    if (filtro.nmnivelavaliacao){
      params.set('nmnivelavaliacao', filtro.nmnivelavaliacao);
    }

    return this.http.get(`${this.cadniveldeavaliacaourl}`, {  headers, search: filtro })
      .toPromise()
      .then(response => {
          const responseJson = response.json();
          const cadniveldeavaliacao = responseJson.content;

          const resultado = {
            cadniveldeavaliacao,
            total: responseJson.totalElements
          };
          return resultado;
      })

    };

    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.cadniveldeavaliacaourl, { headers })
         .toPromise()
         .then(response => response.json());
   }

   atualizar(cadniveldeavaliacao: Cadniveldeavaliacao): Promise<Cadniveldeavaliacao>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.cadniveldeavaliacaourl}/${cadniveldeavaliacao.codigo}`,
         JSON.stringify(cadniveldeavaliacao), { headers })
       .toPromise()
       .then(response => {
         const cadniveldeavaliacaoAlterado = response.json() as Cadniveldeavaliacao;


         return cadniveldeavaliacaoAlterado;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Cadniveldeavaliacao> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.cadniveldeavaliacaourl}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const cadniveldeavaliacao = response.json() as Cadniveldeavaliacao;

         return cadniveldeavaliacao;
       });
 }

}
