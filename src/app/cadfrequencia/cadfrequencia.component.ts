import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadfrequencia',
  templateUrl: './cadfrequencia.component.html',
  styleUrls: ['./cadfrequencia.component.css']
})
export class CadfrequenciaComponent {

  cadfrequencia=[
    {
      "codigo": 1,
      "nmFrequencia": "Uma vez por ano, na época da safra"
      },
      {
      "codigo": 2,
      "nmFrequencia": "Duas vezes por ano, na época da safra"
      },
      {
      "codigo": 3,
      "nmFrequencia": "Uma vez por ano, fora da época da safra"
      },
      {
      "codigo": 4,
      "nmFrequencia": "Duas vezes por ano, fora da época da safra"
      },
      {
      "codigo": 5,
      "nmFrequencia": "Mensalmente"
      },
      {
      "codigo": 6,
      "nmFrequencia": "Trimestralmente"
      },
      {
      "codigo": 7,
      "nmFrequencia": "Semestralmente"
      },
      {
      "codigo": 8,
      "nmFrequencia": "Aleatória, por demanda ou exigência da legislação"
      }
  ]

}
