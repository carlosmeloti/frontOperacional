import { CadempresaService, CadempresaFiltro,  } from './cadempresa.service';

import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-cadempresa',
  templateUrl: './cadempresa.component.html',
  styleUrls: ['./cadempresa.component.css']
})
export class CadempresaComponent implements OnInit{

  filtro = new CadempresaFiltro();
  nmEmpresa: string;
  empresas = [];
  

  constructor(private cadempresaService: CadempresaService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.cadempresaService.pesquisar(this.filtro)
      .then(empresa => this.empresas = empresa);
  }

  excluir(empresa: any){
    this.cadempresaService.excluir(empresa.codigo)
      .then(() => {
        this.pesquisar();
      });

  }


  }

