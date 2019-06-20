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
    { label: 'Exemplo', value: 1 }
  ];

  @ViewChild('tabela') grid;

  modnivel1 = [];

  modnivel2_cdNivel1_1 = [];
  modnivel2_cdNivel1_2 = [];
  modnivel2_cdNivel1_3 = [];
  modnivel2_cdNivel1_4 = [];
  modnivel2_cdNivel1_5 = [];
  modnivel2_cdNivel1_6 = [];

  modnivel3_cdNivel1_1_cdNivel2_1 = [];
  modnivel3_cdNivel1_1_cdNivel2_2 = [];
  modnivel3_cdNivel1_1_cdNivel2_3 = [];

  modnivel3_cdNivel1_2_cdNivel2_1 = [];

  modnivel3 = [];

  modnivel3PreExplo = [];
  modnivel3Explo = [];
  modnivel3PosExplo = [];
  modnivel4 = [];

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

    this.carregarModNivel2_cdNivel1_1();
    this.carregarModNivel2_cdNivel1_2();
    this.carregarModNivel2_cdNivel1_3();
    this.carregarModNivel2_cdNivel1_4();
    this.carregarModNivel2_cdNivel1_5();
    this.carregarModNivel2_cdNivel1_6();

    this.carregarModNivel3_cdNivel1_1_cdNivel2_1();
    this.carregarModNivel3_cdNivel1_1_cdNivel2_2();
    this.carregarModNivel3_cdNivel1_1_cdNivel2_3();

    this.carregarModNivel3_cdNivel1_2_cdNivel2_1();

    this.carregarModNivel3PreExplo();
    this.carregarModNivel3Explo();
    this.carregarModNivel3PosExplo();
    //console.log(this.route.snapshot.params['codigo']);

    const codigoModnivel4 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoModnivel4) {
      this.carregarModlocal4(codigoModnivel4);
    }
  }

  get editando() {
    return Boolean(this.modNivel4Salvar.pkNivel4.cdNivel4)
  }

  //Metodo para carregar valores
  carregarModlocal4(codigo: number) {
    this.modNivel4Service.buscarPorCodigo(codigo)
      .then(modnivel4 => {
        this.modNivel4Salvar = modnivel4;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarMacrozoneamento(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarMacrozoneamento(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarDelimitacaoIdenti(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarDelimitacaoIdenti(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  pesquisarInventarioFlorestal(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarInventarioFlorestal(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarCorteDeCipos(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarCorteDeCipos(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarInstalacaoInfra(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarInstalacaoInfra(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarDerruba(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarDerruba(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarArraste(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarArraste(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarOperacaoDePatio(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarOperacaoDePatio(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarTransporte(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarTransporte(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarSilviculturaPosExplo(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarSilviculturaPosExplo(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarProtecaoFlorestal(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarProtecaoFlorestal(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarSegurancaNoTrabalho(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarSegurancaNoTrabalho(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  pesquisarInfraEstruturaAcampamento(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarInfraEstruturaAcampamento(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  pesquisarModNivel31(page = 0) {

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel31(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModNivel32(page = 0) {

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel32(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModNivel33(page = 0) {

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel33(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModNivel34(page = 0) {

    this.filtro.page = page;

    this.modNivel3Service.pesquisarNivel34(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel3 = resultado.modnivel3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;

  }

  confirmarExclusao(modnivel4: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(modnivel4);
      }
    });
  }

  excluir(modnivel4: any) {

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
  salvar(modnivel4: any) {

    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarModNivel4(modnivel4);
      }
    });

  }



  adicionarModNivel4(form: FormControl) {
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
        this.modnivel1 = modnivel1.map(c => ({ label: c.pkNivel1.cdNivel1 + " - " + c.nmNivel1, value: c.pkNivel1.cdNivel1 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel2_cdNivel1_1() {
    return this.modNivel2Service.listarTodascdNivel1_1()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_1 = modnivel2.map(c => ({ label: c.pkNivel2.cdNivel2 + " - " + c.nmNivel2, value: c.pkNivel2.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  carregarModNivel2_cdNivel1_2() {
    return this.modNivel2Service.listarTodascdNivel1_2()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_2 = modnivel2.map(c => ({ label: c.pkNivel2.cdNivel2 + " - " + c.nmNivel2, value: c.pkNivel2.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel2_cdNivel1_3() {
    return this.modNivel2Service.listarTodascdNivel1_3()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_3 = modnivel2.map(c => ({ label: c.pkNivel2.cdNivel2 + " - " + c.nmNivel2, value: c.pkNivel2.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel2_cdNivel1_4() {
    return this.modNivel2Service.listarTodascdNivel1_4()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_4 = modnivel2.map(c => ({ label: c.pkNivel2.cdNivel2 + " - " + c.nmNivel2, value: c.pkNivel2.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel2_cdNivel1_5() {
    return this.modNivel2Service.listarTodascdNivel1_5()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_5 = modnivel2.map(c => ({ label: c.pkNivel2.cdNivel2 + " - " + c.nmNivel2, value: c.pkNivel2.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel2_cdNivel1_6() {
    return this.modNivel2Service.listarTodascdNivel1_6()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_6 = modnivel2.map(c => ({ label: c.pkNivel2.cdNivel2 + " - " + c.nmNivel2, value: c.pkNivel2.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel3_cdNivel1_1_cdNivel2_1() {
    return this.modNivel3Service.listarTodas_cdNivel1_1_cdNivel2_1()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_1_cdNivel2_1 = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_1_cdNivel2_2() {
    return this.modNivel3Service.listarTodas_cdNivel1_1_cdNivel2_2()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_1_cdNivel2_2 = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_1_cdNivel2_3() {
    return this.modNivel3Service.listarTodas_cdNivel1_1_cdNivel2_3()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_1_cdNivel2_3 = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_2_cdNivel2_1() {
    return this.modNivel3Service.listarTodas_cdNivel1_2_cdNivel2_1()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_2_cdNivel2_1 = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3PreExplo() {
    return this.modNivel3Service.listarTodasPreExplo()
      .then(modnivel3 => {
        this.modnivel3PreExplo = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel3Explo() {
    return this.modNivel3Service.listarTodasExplo()
      .then(modnivel3 => {
        this.modnivel3Explo = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel3PosExplo() {
    return this.modNivel3Service.listarTodasPosExplo()
      .then(modnivel3 => {
        this.modnivel3PosExplo = modnivel3.map(c => ({ label: c.pkNivel3.cdNivel3 + " - " + c.nmNivel3, value: c.pkNivel3.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}
