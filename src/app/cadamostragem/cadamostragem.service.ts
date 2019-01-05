import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Cadamostragem } from '../core/model2';



export class CadamostragemFiltro {
  nmamostragem : string;
  page = 0;
  size = 5;
}

@Injectable()
export class CadamostragemService {

  cadamostragemurl = 'http://localhost:8080/cadamostragem';

  constructor(private http: Http) { }

  pesquisar(filtro: CadamostragemFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmamostragem){
      params.set('nmamostragem', filtro.nmamostragem);
    }

    return this.http.get(`${this.cadamostragemurl}?resumo`, {  headers, search: filtro })
    .toPromise()
      .then(response => {
          const responseJson = response.json();
          const cadamostragem = responseJson.content;

          const resultado = {
            cadamostragem,
            total: responseJson.totalElements
          };
          return resultado;
      })

    };

    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.cadamostragemurl}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(cadamostragem: Cadamostragem): Promise<Cadamostragem>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.cadamostragemurl, JSON.stringify(cadamostragem), { headers })
        .toPromise()
        .then(response => response.json());
    }




  }
