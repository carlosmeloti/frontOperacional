import { CadempresaService } from './cadempresa.service';

import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cadempresa',
  templateUrl: './cadempresa.component.html',
  styleUrls: ['./cadempresa.component.css']
})
export class CadempresaComponent implements OnInit{

  nmEmpresa: string;
  empresas = [];

  constructor(private cadempresaService: CadempresaService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.cadempresaService.pesquisar({ nmEmpresa: this.nmEmpresa })
      .then(empresa => this.empresas = empresa);
  }


  }

