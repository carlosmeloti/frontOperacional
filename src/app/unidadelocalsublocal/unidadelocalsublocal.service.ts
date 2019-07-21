

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Modlocal3 } from '../core/model';

export class Modlocal3Filtro {

  nmlocal1: string;
  nmLocal2: String;
  codigo: string;
  page = 0;
  size = 5;
  cdLocal2: any;
}

@Injectable()
export class UnidadelocalsublocalService {

  modLocal3URL = 'http://localhost:8081/sublocaldeavaliacao';



  constructor(private http: Http) { }


  adicionar(modlocal3: Modlocal3): Promise<Modlocal3> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.modLocal3URL, JSON.stringify(modlocal3), { headers })
      .toPromise()
      .then(response => response.json());
  }

  buscarPorCodigo(codigo: number): Promise<Modlocal3> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.modLocal3URL}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const modlocal3 = response.json() as Modlocal3;

        return modlocal3;
      });
  }

  atualizar(modlocal3: Modlocal3): Promise<Modlocal3> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.modLocal3URL}/${modlocal3.cdLocal3}`,
      JSON.stringify(modlocal3), { headers })
      .toPromise()
      .then(response => {
        const modlocal3Alterada = response.json() as Modlocal3;


        return modlocal3Alterada;
      });
  }




  pesquisarEmTodosOsLocais(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=1&cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarPicadasInventario(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=2&cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarDerruba(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=3&cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  pesquisarEmTodosOsLocais2(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=4&cdLocal1=2`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarTrilhasDeArraste(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=5&cdLocal1=2`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarEmTodosOsLocais3(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=6&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarTodoPatio(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=7&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarBordasPatio(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=8&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  pesquisarSaidaPatio(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=9&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarEmTodosOsLocais4(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=10&cdLocal1=4`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarTodoPatioTransportado(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=11&cdLocal1=4`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };
  pesquisarEmTodosOsLocais5(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=12&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };
  pesquisareEstradasPrincipais(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=13&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarEstradasSecundarias(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=14&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarTodaMalhaViaria(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=15&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };
  pesquisarEmTodosOsLocais6(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=16&cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarParcela(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=17&cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarGeral(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=18&cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarEmTodosOsLocais7(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=19&cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarGeralAcam(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=20&cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarAlojamento(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=21&cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarEmTodosOsLocais8(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=22&cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarGeralEscri(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=23&cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarPmfs(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=24&cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarEmTodosOsLocais9(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal25=0&cdLocal1=9`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarGeralEntor(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=26&cdLocal1=9`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };



}
