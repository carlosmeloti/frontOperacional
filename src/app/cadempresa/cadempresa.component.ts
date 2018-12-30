import { CadempresaService, CadempresaFiltro,  } from './cadempresa.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { LazyLoadEvent } from 'src/primeng/api';



@Component({
  selector: 'app-cadempresa',
  templateUrl: './cadempresa.component.html',
  styleUrls: ['./cadempresa.component.css']
})
export class CadempresaComponent implements OnInit{

  tatalRegistros = 0;
  filtro = new CadempresaFiltro();
  nmEmpresa: string;
  empresas = [];
  @ViewChild('tabela') grid;
  

  constructor(private cadempresaService: CadempresaService) {}

  ngOnInit() {
   // this.pesquisar();
  }

  pesquisar(pagina = 0){
    
    this.filtro.page = pagina;
    
    this.cadempresaService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.empresas = resultado.cadempresa;
      
      });
  }
  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(empresa: any){
    this.cadempresaService.excluir(empresa.codigo)
      .then(() => {
        this.grid.first = 0;
      });

  }

  }

