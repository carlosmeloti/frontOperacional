import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadtipodeverificador',
  templateUrl: './cadtipodeverificador.component.html',
  styleUrls: ['./cadtipodeverificador.component.css']
})
export class CadtipodeverificadorComponent {

  cadtipoverificador = [
     {
      "cdTipoVerificador": 1,
      "nmTipoVerificador": "Monitoramento Operacional",
      "nrniveis": 4,
      "rotulonivel1": "-",
      "rotulonivel2": "ETAPA",
      "rotulonivel3": "ITEM",
      "rotulonivel4": "SUBITEM",
      "rotulonivel5": "VERIFICADOR"
      },
      {
        "cdTipoVerificador": 2,
        "nmTipoVerificador": "Avaliação de impactos",
        "nrniveis": 4,
        "rotulonivel1": "-",
        "rotulonivel2": "-",
        "rotulonivel3": "ITEM",
        "rotulonivel4": "SUBITEM",
        "rotulonivel5": "VERIFICADOR"
        },
        {
          "cdTipoVerificador": 3,
          "nmTipoVerificador": "Vistoria de PMFS",
          "nrniveis": 4,
          "rotulonivel1": "-",
          "rotulonivel2": "ETAPA",
          "rotulonivel3": "ITEM",
          "rotulonivel4": "SUBITEM",
          "rotulonivel5": "VERIFICADOR"
          },
          {
            "cdTipoVerificador": 4,
            "nmTipoVerificador": "Certificação Florestal",
            "nrniveis": 4,
            "rotulonivel1": "-",
            "rotulonivel2": "ETAPA",
            "rotulonivel3": "ITEM",
            "rotulonivel4": "SUBITEM",
            "rotulonivel5": "VERIFICADOR"
          },
          {
            "cdTipoVerificador": 5,
            "nmTipoVerificador": "Avaliação de sustentabilidade (pesquisa)",
            "nrniveis": 4,
            "rotulonivel1": "ASSUNTO",
            "rotulonivel2": "ETAPA",
            "rotulonivel3": "ITEM",
            "rotulonivel4": "SUBITEM",
            "rotulonivel5": "VERIFICADOR"
          }
  ];


  }

