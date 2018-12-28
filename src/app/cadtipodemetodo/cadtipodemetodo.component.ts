import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadtipodemetodo',
  templateUrl: './cadtipodemetodo.component.html',
  styleUrls: ['./cadtipodemetodo.component.css']
})
export class CadtipodemetodoComponent {

  cadtipodemetodo = [
    {
      "codigo": 1,
      "tipometodo": "Análise de mapas e/ou documentação no campo"
      },
      {
      "codigo": 2,
      "tipometodo": "Análise de mapas e/ou documentação no escritório"
      },
      {
      "codigo": 3,
      "tipometodo": "Entrevistas com funcionários"
      },
      {
      "codigo": 4,
      "tipometodo": "Medição em campo"
      },
      {
      "codigo": 5,
      "tipometodo": "Medição no acampamento"
      },
      {
      "codigo": 6,
      "tipometodo": "Observação em campo"
      },
      {
      "codigo": 7,
      "tipometodo": "Observação no acampamento"
      }
  ]

}
