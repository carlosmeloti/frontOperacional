import { Component, OnInit, ViewChild } from '@angular/core';
import { CadmaterialFiltro, CadmaterialService } from './cadmaterial.service';
import { Cadmaterial } from '../core/model';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-cadmaterial',
  templateUrl: './cadmaterial.component.html',
  styleUrls: ['./cadmaterial.component.css']
})
export class CadmaterialComponent {

  tatalRegistros = 0;
  filtro = new CadmaterialFiltro();
  nmmaterial: string;

  materialSalvar = new Cadmaterial();
  empresas = [
    {label: 'Exemplo', value: 1}
  ];
  @ViewChild('tabela') grid;

  cadmaterial=[]

  constructor(
    private cadmaterialService: CadmaterialService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
  ){}

  ngOnInit() {

  }
  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadmaterialService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadmaterial = resultado.cadmaterial;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(material: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(material);
      }
    });
  }

  excluir(material: any){

    this.cadmaterialService.excluir(material.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Material excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(form: FormControl){
    this.cadmaterialService.adicionar(this.materialSalvar)
      .then(() => {
        this.toasty.success("Material cadastrado com sucesso!");
        form.reset();
        this.materialSalvar = new Cadmaterial();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
