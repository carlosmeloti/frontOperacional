import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadniveldeavaliacao',
  templateUrl: './cadniveldeavaliacao.component.html',
  styleUrls: ['./cadniveldeavaliacao.component.css']
})
export class CadniveldeavaliacaoComponent {

  cadnivelavaliacao = [
    {
      "codigo": 1,
      "nmnivelavaliacao": "Ação corretiva próxima safra",
      "sigla": "AC/PS",
      "txdescricao": "Providências relacionadas ao verificador que devem ser cumpridas até a próxima safra."
      },
      {
      "codigo": 2,
      "nmnivelavaliacao": "Ação corretiva urgente (60)",
      "sigla": "AC60",
      "txdescricao": "Providências relacionadas ao verificador que devem ser cumpridas em um prazo máximo de 60 dias."
      },
      {
      "codigo": 3,
      "nmnivelavaliacao": "Ação corretiva urgente (30)",
      "sigla": "AC30",
      "txdescricao": "Providências relacionadas ao verificador que devem ser cumpridas em um prazo máximo de 30 dias."
      },
      {
      "codigo": 4,
      "nmnivelavaliacao": "Sujeito a suspensão",
      "sigla": "SS",
      "txdescricao": "Não conformidade que implica em suspensão do PMFS."
      },
      {
      "codigo": 5,
      "nmnivelavaliacao": "Sujeito a cancelamento",
      "sigla": "SC",
      "txdescricao": "Não conformidades tão graves que implica em cancelamento do PMFS."
      },
      {
      "codigo": 6,
      "nmnivelavaliacao": "Recomendação",
      "sigla": "R",
      "txdescricao": "Recomendação relacionada à execução do PMFS, que não implica em ação corretiva ou sanção administrativa."
      },
      {
      "codigo": 7,
      "nmnivelavaliacao": "Nenhuma ação corretiva",
      "sigla": "NAC",
      "txdescricao": "O verificador foi atendido em sua totalidade, não sendo aplicãvel nenhuma ação corretiva ou sanção."
      },
      {
      "codigo": 8,
      "nmnivelavaliacao": "Não se aplica / Não avaliado",
      "sigla": "NA",
      "txdescricao": "O verificador não se aplica, no momento da vistoria, ou não foi avaliado."
      }
  ]



}
