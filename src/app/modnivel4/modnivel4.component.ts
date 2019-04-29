import { Component, OnInit, ViewChild } from '@angular/core';
import { Modnivel1Service } from '../modnivel1/modnivel1.service';
import { Modnivel2Service } from '../modnivel2/modnivel2.service';
import { Modnivel3Service } from '../modnivel3/modnivel3.service';
import { Modnivel4Service, Modnivel4Filtro } from './modnivel4.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ModNivel4 } from '../core/model';

@Component({
  selector: 'app-modnivel4',
  templateUrl: './modnivel4.component.html',
  styleUrls: ['./modnivel4.component.css']
})
export class Modnivel4Component implements OnInit {

  tatalRegistros = 0;
  filtro = new Modnivel4Filtro();


  modNivel4Salvar = new ModNivel4();

  empresas = [
    {label: 'Exemplo', value: 1}
  ];

  @ViewChild('tabela') grid;

  modnivel1=[];
  modnivel2=[];
  modnivel3=[];
  modnivel4=[];

  constructor(
    private modNivel1Service: Modnivel1Service,
    private modNivel2Service: Modnivel2Service,
    private modNivel3Service: Modnivel3Service,
    private modNivel4Service: Modnivel4Service,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.carregarModNivel1();
    this.carregarModNivel2();
    this.carregarModNivel3();
    //console.log(this.route.snapshot.params['codigo']);

    const codigoModnivel4 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if(codigoModnivel4){
      this.carregarModlocal4(codigoModnivel4);
    }
  }

  get editando(){
    return Boolean(this.modNivel4Salvar.cdNivel4)
  }

  //Metodo para carregar valores
  carregarModlocal4(codigo: number){
    this.modNivel4Service.buscarPorCodigo(codigo)
      .then(modnivel4 => {
        this.modNivel4Salvar = modnivel4;
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

  confirmarExclusao(modnivel4: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
     this.excluir(modnivel4);
      }
    });
  }

  excluir(modnivel4: any){

    this.modNivel4Service.excluir(modnivel4.cdNivel4)
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
  salvar(modnivel4: any){

    this.confirmation.confirm( {
      message: 'Tem certeza que deseja salvar?',
      accept: () =>{
        this.adicionarModNivel4(modnivel4);
      }
    });

  }



  adicionarModNivel4(form: FormControl){
        this.modNivel4Service.adicionar(this.modNivel4Salvar)
          .then(() => {
            this.toasty.success("Local de Avaliação cadastrada com sucesso!");
            form.reset();
            this.modNivel4Salvar = new ModNivel4();
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

      carregarModNivel3() {
        return this.modNivel3Service.listarTodas()
          .then(modnivel3 => {
            this.modnivel3 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
          })
          .catch(erro => this.errorHandler.handle(erro));
    }

}
