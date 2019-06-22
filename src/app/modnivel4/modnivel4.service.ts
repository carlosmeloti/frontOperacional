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


  modnivel4URL = 'http://localhost:8086/modnivel4';

  URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=1&cdNivel3=1';
  URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=1&cdNivel3=2';
  URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_3 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=1&cdNivel3=3';
  URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_4 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=1&cdNivel3=4';
  URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_5 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=1&cdNivel3=5';

  URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=2&cdNivel3=1';
  URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=2&cdNivel3=2';
  URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_3 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=2&cdNivel3=3';
  URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_4 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=2&cdNivel3=4';
 
  URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=3&cdNivel3=1';
  URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=3&cdNivel3=2';
  URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_3 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=3&cdNivel3=3';
  URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_4 = 'http://localhost:8086/modnivel4?cdNivel1=1&cdNivel2=3&cdNivel3=4';
 
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=1';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=2';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_3 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=3';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_4 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=4';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_5 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=5';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_6 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=6';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_7 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=7';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_8 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=8';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_9 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=9';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_10 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=10';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_11 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=11';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_12 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=12';
  URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_13 = 'http://localhost:8086/modnivel4?cdNivel1=2&cdNivel2=1&cdNivel3=13';
  
  URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=3&cdNivel2=1&cdNivel3=1';
  URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=3&cdNivel2=1&cdNivel3=2';
  URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_3 = 'http://localhost:8086/modnivel4?cdNivel1=3&cdNivel2=1&cdNivel3=3';
  URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_4 = 'http://localhost:8086/modnivel4?cdNivel1=3&cdNivel2=1&cdNivel3=4';

  URLmodnivel4_cdNivel1_3_cdNivel2_2_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=3&cdNivel2=2&cdNivel3=1';
  URLmodnivel4_cdNivel1_3_cdNivel2_2_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=3&cdNivel2=2&cdNivel3=2';

  URLmodnivel4_cdNivel1_4_cdNivel2_1_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=4&cdNivel2=1&cdNivel3=1';
  URLmodnivel4_cdNivel1_4_cdNivel2_1_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=4&cdNivel2=1&cdNivel3=2';

  URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=4&cdNivel2=2&cdNivel3=1';
  URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=4&cdNivel2=2&cdNivel3=2';
  URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_3 = 'http://localhost:8086/modnivel4?cdNivel1=4&cdNivel2=2&cdNivel3=3';
  URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_4 = 'http://localhost:8086/modnivel4?cdNivel1=4&cdNivel2=2&cdNivel3=4';

  URLmodnivel4_cdNivel1_5_cdNivel2_1_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=5&cdNivel2=1&cdNivel3=1';
  URLmodnivel4_cdNivel1_5_cdNivel2_1_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=5&cdNivel2=1&cdNivel3=2';
 
  URLmodnivel4_cdNivel1_5_cdNivel2_2_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=5&cdNivel2=2&cdNivel3=1';
  URLmodnivel4_cdNivel1_5_cdNivel2_2_cdNivel3_2 = 'http://localhost:8086/modnivel4?cdNivel1=5&cdNivel2=2&cdNivel3=2';
 
  URLmodnivel4_cdNivel1_6_cdNivel2_1_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=6&cdNivel2=1&cdNivel3=1';
 
  URLmodnivel4_cdNivel1_6_cdNivel2_2_cdNivel3_1 = 'http://localhost:8086/modnivel4?cdNivel1=6&cdNivel2=2&cdNivel3=1';
 

  constructor(private http: Http) { }


  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_3(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_3}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_4(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_4}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_5(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_5}`, { headers })
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


  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_3(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_3}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_4(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_4}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_3(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_3}`, { headers })
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

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_4(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_4}`, { headers })
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

  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_3(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_3}`, { headers })
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

  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_4(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_4}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_5(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_5}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_6(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_6}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_7(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_7}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_8(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_8}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_9(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_9}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_10(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_10}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_11(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_11}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_12(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_12}`, { headers })
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
  pesquisarModnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_13(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_2_cdNivel2_1_cdNivel3_13}`, { headers })
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

  pesquisarModnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_3(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_3}`, { headers })
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

  pesquisarModnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_4(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_3_cdNivel2_1_cdNivel3_4}`, { headers })
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

  pesquisarModnivel4_cdNivel1_3_cdNivel2_2_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_3_cdNivel2_2_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_3_cdNivel2_2_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_3_cdNivel2_2_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_4_cdNivel2_1_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_4_cdNivel2_1_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_4_cdNivel2_1_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_4_cdNivel2_1_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_3(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_3}`, { headers })
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

  pesquisarModnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_4(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_4_cdNivel2_2_cdNivel3_4}`, { headers })
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

  pesquisarModnivel4_cdNivel1_5_cdNivel2_1_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_5_cdNivel2_1_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_5_cdNivel2_1_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_5_cdNivel2_1_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_5_cdNivel2_2_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_5_cdNivel2_2_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_5_cdNivel2_2_cdNivel3_2(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_5_cdNivel2_2_cdNivel3_2}`, { headers })
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

  pesquisarModnivel4_cdNivel1_6_cdNivel2_1_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_6_cdNivel2_1_cdNivel3_1}`, { headers })
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

  pesquisarModnivel4_cdNivel1_6_cdNivel2_2_cdNivel3_1(filtro: Modnivel4Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel4_cdNivel1_6_cdNivel2_2_cdNivel3_1}`, { headers })
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



    pesquisarDelimitacaoIdenti(filtro: Modnivel4Filtro): Promise<any> {

      const params = new URLSearchParams;
      const headers = new Headers;

      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



      return this.http.get(`${this.modnivel4URL}?cdNivel3=2`, {  headers })
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

      pesquisarInventarioFlorestal(filtro: Modnivel4Filtro): Promise<any> {

        const params = new URLSearchParams;
        const headers = new Headers;

        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



        return this.http.get(`${this.modnivel4URL}?cdNivel3=3`, {  headers })
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

        pesquisarCorteDeCipos(filtro: Modnivel4Filtro): Promise<any> {

          const params = new URLSearchParams;
          const headers = new Headers;

          headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



          return this.http.get(`${this.modnivel4URL}?cdNivel3=4`, {  headers })
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

          pesquisarInstalacaoInfra(filtro: Modnivel4Filtro): Promise<any> {

            const params = new URLSearchParams;
            const headers = new Headers;

            headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



            return this.http.get(`${this.modnivel4URL}?cdNivel3=5`, {  headers })
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

            pesquisarDerruba(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=6`, {  headers })
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
            pesquisarArraste(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=7`, {  headers })
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

            pesquisarOperacaoDePatio(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=8`, {  headers })
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

            pesquisarTransporte(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=9`, {  headers })
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
            pesquisarSilviculturaPosExplo(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=10`, {  headers })
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

            pesquisarProtecaoFlorestal(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=11`, {  headers })
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

            pesquisarSegurancaNoTrabalho(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=12`, {  headers })
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

            pesquisarInfraEstruturaAcampamento(filtro: Modnivel4Filtro): Promise<any> {

              const params = new URLSearchParams;
              const headers = new Headers;

              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



              return this.http.get(`${this.modnivel4URL}?cdNivel3=13`, {  headers })
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

     return this.http.put(`${this.modnivel4URL}/${modnivel4.pkNivel4.cdNivel4}`,
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
