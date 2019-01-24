import { CadtipodeverificadorService } from './../cadtipodeverificador/cadtipodeverificador.service';
import { Component, OnInit, Injectable } from '@angular/core';

import { ErrorHandlerService } from '../core/error-handler.service';
import { VerificadorMService, CadverificadorFiltro } from './verificador-m.service';
import { Verificador_m } from '../core/model';





@Component({
  selector: 'app-verificador-m',
  templateUrl: './verificador-m.component.html',
  styleUrls: ['./verificador-m.component.css']
})
export class VerificadorMComponent implements OnInit  {

  verificadorm = [];
  cadtipodeverificador=[];
  verificadorMSalvar = new Verificador_m;

  filtro = new CadverificadorFiltro;

  constructor(
    private verificadorMService: VerificadorMService,
    private tipoDeVerificadores: CadtipodeverificadorService,
    private errorHandler: ErrorHandlerService

  ) {}

  ngOnInit() {
    this.pesquisar();
    this.carregarTipoDeVerificadores();
  }
  pesquisar(){

    this.verificadorMService.pesquisar()
      .then(verificadores => this.verificadorm = verificadores);

  }

  carregarTipoDeVerificadores() {
    return this.tipoDeVerificadores.listarTodas()
      .then(tipoDeVerificadores => {
        this.cadtipodeverificador = tipoDeVerificadores.map(c => ({ label: c.nmTipoVerificador, value: c.cdTipoVerificador }));
      })
      .catch(erro => this.errorHandler.handle(erro));
}


}
