import { Component, OnInit,ViewChild } from '@angular/core';
import { CadtipodemetodoFiltro, CadtipodemetodoService } from './cadtipodemetodo.service';
import { Cadtipodemetodo } from '../core/model';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-cadtipodemetodo',
  templateUrl: './cadtipodemetodo.component.html',
  styleUrls: ['./cadtipodemetodo.component.css']
})
export class CadtipodemetodoComponent {

  tatalRegistros = 0;
  filtro = new CadtipodemetodoFiltro();
  nmFrequencia: string;

  tipodemetodoSalvar = new Cadtipodemetodo();
  empresas = [
    {label: 'Exemplo', value: 1}
  ];
  @ViewChild('tabela') grid;

  cadtipodemetodo = []

  constructor(
    private cadtipodemetodoService: CadtipodemetodoService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
  ){}

  ngOnInit() {

  }
  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadtipodemetodoService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadtipodemetodo = resultado.cadtipodemetodo;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(tipodemetodo: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(tipodemetodo);
      }
    });
  }

  excluir(tipometodo: any){

    this.cadtipodemetodoService.excluir(tipometodo.codigo)
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
    this.cadtipodemetodoService.adicionar(this.tipodemetodoSalvar)
      .then(() => {
        this.toasty.success("Tipo de metodo cadastrado com sucesso!");
        form.reset();
        this.tipodemetodoSalvar = new Cadtipodemetodo();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
