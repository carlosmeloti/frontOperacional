import { Component, OnInit, ViewChild } from '@angular/core';
import { CadfrequenciaFiltro, CadfrequenciaService } from './cadfrequencia.service';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Cadfrequencia } from '../core/model';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-cadfrequencia',
  templateUrl: './cadfrequencia.component.html',
  styleUrls: ['./cadfrequencia.component.css']
})
export class CadfrequenciaComponent {

  tatalRegistros = 0;
  filtro = new CadfrequenciaFiltro();
  nmFrequencia: string;

  frequenciaSalvar = new Cadfrequencia();
  empresas = [
    {label: 'Exemplo', value: 1}
  ];
  @ViewChild('tabela') grid;

  cadfrequencia=[]

  constructor(
    private cadfrequenciaService: CadfrequenciaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
  ){}

  ngOnInit() {

  }
  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadfrequenciaService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadfrequencia = resultado.cadfrequencia;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(frequencia: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(frequencia);
      }
    });
  }

  excluir(frequencia: any){

    this.cadfrequenciaService.excluir(frequencia.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Frequencia excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(form: FormControl){
    this.cadfrequenciaService.adicionar(this.frequenciaSalvar)
      .then(() => {
        this.toasty.success("Frequencia cadastrada com sucesso!");
        form.reset();
        this.frequenciaSalvar = new Cadfrequencia();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
