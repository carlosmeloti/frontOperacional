import { Component, OnInit } from '@angular/core';
import { CadamostragemService } from './cadamostragem.service';

@Component({
  selector: 'app-cadamostragem',
  templateUrl: './cadamostragem.component.html',
  styleUrls: ['./cadamostragem.component.css']
})
export class CadamostragemComponent {


  nmamostragem: string;
  cadamostragem=[]

  constructor(private cadamostragemService: CadamostragemService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.cadamostragemService.pesquisar({ nmamostragem: this.nmamostragem })
      .then(amostragem => this.cadamostragem = amostragem);
  }

}
