import { Component, OnInit, ViewChild } from '@angular/core';
import { CadamostragemService, CadamostragemFiltro } from './cadamostragem.service';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Cadamostragem } from '../core/model';
import { FormControl } from '@angular/forms';
import { CadempresaService } from '../cadempresa/cadempresa.service';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-cadamostragem',
  templateUrl: './cadamostragem.component.html',
  styleUrls: ['./cadamostragem.component.css']
})
export class CadamostragemComponent {

  tatalRegistros = 0;
  filtro = new CadamostragemFiltro();
  nmamostragem: string;

  amostragemSalvar = new Cadamostragem();
  cadamostragem=[
    {ngModel: 'cadEmpresa.codigo', value: '1'}
  ]
  empresas = [
    {label: 'Exemplo', value: 1}
  ];
  @ViewChild('tabela') grid;

  constructor(
    private cadamostragemService: CadamostragemService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,

    private cadempresaService: CadempresaService,
    private errorHandler: ErrorHandlerService,


    ) {}

  ngOnInit() {
    
  }

  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadamostragemService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadamostragem = resultado.cadamostragem;

      });
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(amostragem: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(amostragem);
      }
    });
  }

  excluir(amostragem: any){

    this.cadamostragemService.excluir(amostragem.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Amostragem excluída com sucesso!');
      });

  }
  
  salvar(form: FormControl){
    this.cadamostragemService.adicionar(this.amostragemSalvar)
      .then(() => {
        this.toasty.success("Amostragem cadastrada com sucesso!");
        form.reset();
        this.amostragemSalvar = new Cadamostragem();
        this.pesquisar();
      })
    .catch()
  }

 

}
