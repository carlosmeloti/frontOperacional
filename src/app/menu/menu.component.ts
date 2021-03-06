import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/primeng/components/common/menuitem';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
          label: 'Cadastro Geral',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                label: 'Empresa',
                routerLink: '/cadempresa'
              },
              {separator: true},
              {
                label: 'Tipo Verificador',
                routerLink: '/cadtipodeverificador'
              },
              {
                label: 'Categoria de Avaliação',
                routerLink: '/cadniveldeavaliacao'
              },
              {
                label: 'Amostragem',
                routerLink: '/cadamostragem'
              },
              {
                label: 'Frequência',
                routerLink: '/cadfrequencia'
              },
              {
                label: 'Tipo de Método',
                routerLink: '/cadtipodemetodo'
              },
              {
                label: 'Material',
                routerLink: '/cadmaterial'
              },
              {separator: true},
              {label: 'Sair'}
          ]
      },
      {
          label: 'Ambiente Modelo',
          icon: 'pi pi-fw pi-clone',
          items: [
              {
                label: 'Verificador',
                routerLink: '/verificador_m'
              },
              {
                label: 'Associar Verificador',
                routerLink: '/associarverificador'
              },
              {
                label: 'Unidade de Avaliação',
                routerLink: '/modlocal1'
              },
              {
                label: 'Local de Avaliação',
                routerLink: '/modlocal2'
              },
              {
                label: 'Sublocal',
                routerLink: '/unidadelocalsublocal'
              },
              {
                label: 'Nível Hierárquivo ( Assunto, etapa, Item e subitem)',
                routerLink: '/modnivel4'
              },
              {separator: true},
              {
                label: 'Template Monitoramento',
                items: [{
                  label: 'Modelo de Monitoramento',
                  routerLink: '/modmonitoramentotemplate'
                },
                {
                  label: 'Verificadores do Modelo',
                  routerLink: '/modverificadoresdomodelo'
                }]

              }
          ]
      },
      {
          label: 'Ambiente Aplicação',
          icon: 'pi pi-fw pi-mobile',
          items: [
            {
              label: 'Geração de Monitoramento a partir de Modelo',
              routerLink: '/appmonitoramento'
            },
            {separator: true},
            {
              label: 'Monitoramento',
              routerLink: '/appmonitoramentoverificador'
            },
            {
              label: 'Avaliação',
              routerLink: '/appavaliacao'
            },
            {separator: true},
            {label: 'Formulário de Coleta de Dados'},
            {label: 'Coleta de Dados'}
        ]
      },
      {
          label: 'Relatório',
          icon: 'pi pi-chart-bar',
          items: [
            {label: 'Relatório sitético de avaliação'},
            {label: 'Relatório analítico de avaliação'},
            {label: 'Relatório sintético de evolução sobre avaliação dos verificadores'},
            {label: 'Relatório analítico de evolução sobre avaliação dos verificadores'}
        ]
      },
      {
        label: 'Ajuda',
        icon: 'pi pi-fw pi-question',
        items: [
            {label: 'Como utilizar o MOP'},
            {label: 'Sobre...'}
        ]
      },
      {
          label: 'Início', icon: 'pi pi-fw pi-times',
          routerLink:'/inicio'
      }
  ];
  }

}
