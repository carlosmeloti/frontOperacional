import { CadtipodeverificadorService } from './../cadtipodeverificador/cadtipodeverificador.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
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

    this.carregarTipoDeVerificadores();
  }


  pesquisarMon(){
      this.verificadorMService.pesquisarMon()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarImp(){

      this.verificadorMService.pesquisarImp()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarPMFS(){
    this.verificadorMService.pesquisarPMFS()
    .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarCerti(){
    this.verificadorMService.pesquisarCerti()
    .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarSuste(){
    this.verificadorMService.pesquisarSuste()
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
