import { Component, OnInit, ViewChild } from '@angular/core';
import { ModNivel3 } from '../core/model';
import { Modnivel1Service } from '../modnivel1/modnivel1.service';
import { Modnivel2Service } from '../modnivel2/modnivel2.service';
import { Modnivel3Service, Modnivel3Filtro } from './modnivel3.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modnivel3',
  templateUrl: './modnivel3.component.html',
  styleUrls: ['./modnivel3.component.css']
})
export class Modnivel3Component implements OnInit {

  tatalRegistros = 0;
  filtro = new Modnivel3Filtro();


  modNivel3Salvar = new ModNivel3();

  empresas = [
    {label: 'Exemplo', value: 1}
  ];

  @ViewChild('tabela') grid;

  modnivel1=[];
  modnivel2=[];
  modnivel3=[];

  constructor(
    private modNivel1Service: Modnivel1Service,
    private modNivel2Service: Modnivel2Service,
    private modNivel3Service: Modnivel3Service,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.carregarModNivel1();
    this.carregarModNivel2();
    //console.log(this.route.snapshot.params['codigo']);

    const codigoModnivel3 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if(codigoModnivel3){
      this.carregarModlocal3(codigoModnivel3);
    }
  }

  get editando(){
    return Boolean(this.modNivel3Salvar.pkNivel3.cdNivel3)
  }

  //Metodo para carregar valores
  carregarModlocal3(codigo: number){
    this.modNivel3Service.buscarPorCodigo(codigo)
      .then(modnivel3 => {
        this.modNivel3Salvar = modnivel3;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModNivel31(page = 0){

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel31(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModNivel32(page = 0){

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel32(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModNivel33(page = 0){

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel33(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModNivel34(page = 0){

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel34(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;

  }

  confirmarExclusao(modnivel3: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
     this.excluir(modnivel3);
      }
    });
  }

  excluir(modnivel3: any){

    this.modNivel3Service.excluir(modnivel3.cdNivel3)
      .then(() => {
        if (this.grid.first === 0) {
          //this.pesquisar();
        } else {
          this.grid.first = 0;
         // this.pesquisar();
        }
        this.toasty.success('Etapa excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(modnivel3: any){

    this.confirmation.confirm( {
      message: 'Tem certeza que deseja salvar?',
      accept: () =>{
        this.adicionarModNivel3(modnivel3);
      }
    });

  }



  adicionarModNivel3(form: FormControl){
        this.modNivel3Service.adicionar(this.modNivel3Salvar)
          .then(() => {
            this.toasty.success("Local de Avaliação cadastrada com sucesso!");
            form.reset();
            this.modNivel3Salvar = new ModNivel3();
            //this.pesquisar();
          })
          .catch(erro => this.errorHandler.handle(erro));
      }



      carregarModNivel1() {
        return this.modNivel1Service.listarTodas()
          .then(modnivel1 => {
            this.modnivel1 = modnivel1.map(c => ({ label: c.cdNivel1 + " - " + c.nmNivel1, value: c.cdNivel1 }));
          })
          .catch(erro => this.errorHandler.handle(erro));
    }

    carregarModNivel2() {
      return this.modNivel2Service.listarTodas()
        .then(modnivel2 => {
          this.modnivel2 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

}