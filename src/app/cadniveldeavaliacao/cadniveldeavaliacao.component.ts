import { Component, OnInit } from '@angular/core';
import { CadniveldeavaliacaoService } from './cadniveldeavaliacao.service';

@Component({
  selector: 'app-cadniveldeavaliacao',
  templateUrl: './cadniveldeavaliacao.component.html',
  styleUrls: ['./cadniveldeavaliacao.component.css']
})
export class CadniveldeavaliacaoComponent implements OnInit {

  nmnivelavaliacao: string;
  cadnivelavaliacao = []

  constructor(private cadniveldeavaliacaoService: CadniveldeavaliacaoService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.cadniveldeavaliacaoService.pesquisar({ nmnivelavaliacao: this.nmnivelavaliacao })
      .then(niveldeavaliacao => this.cadnivelavaliacao = niveldeavaliacao);
  }


}

