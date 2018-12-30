
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';


export class CadempresaFiltro {
  nmEmpresa : string;
  page = 0;
  size = 5;
}


@Injectable()
export class CadempresaService {

  cadempresaurl = 'http://localhost:8080/cadempresa';

  constructor(private http: Http) { }


  pesquisar(filtro: CadempresaFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());

    if (filtro.nmEmpresa){
      params.set('nmEmpresa', filtro.nmEmpresa);
    }

    return this.http.get(`${this.cadempresaurl}`, {  headers, search: filtro })
      .toPromise()
      .then(response => {
          const responseJson = response.json();
          const cadempresa = responseJson.content;

          const resultado = {
            cadempresa,
            total: responseJson.totalElements
          };
          return resultado;
      })

    };


    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.cadempresaurl}/${codigo}`, { headers})
        .toPromise()
        .then(() => null);
    }

}
