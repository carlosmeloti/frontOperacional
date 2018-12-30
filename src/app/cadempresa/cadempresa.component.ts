import { CadempresaService, CadempresaFiltro,  } from './cadempresa.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

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
  

  constructor(
    private cadempresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
    ) {}

  ngOnInit() {
   // this.pesquisar();
  }

  pesquisar(page = 0){
    
    this.filtro.page = page;
    
    this.cadempresaService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.empresas = resultado.cadempresa;
      
      });
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(empresa: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(empresa);
      } 
    });
  }

  excluir(empresa: any){
    
    this.cadempresaService.excluir(empresa.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Empresa excluída com sucesso!');
      });

  }

  }

