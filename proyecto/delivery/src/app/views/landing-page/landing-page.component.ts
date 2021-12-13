import { Component, OnInit } from '@angular/core';

interface Step{
  icon: string;
  name: string;
  desc: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  steps: Step[] = [
    {
      icon: 'step1',
      name: '1 - Selección',
      desc: 'Selecciona la orden a tu conveniencia.'
    },
    {
      icon: 'step2',
      name: '2 - Recoge la orden',
      desc: 'Recoge la orden en el local cuando ya este lista.'
    },
    {
      icon: 'step3',
      name: '3 - Transporte',
      desc: 'Ve al lugar de destino para relizar la entrega de la orden.'
    },
    {
      icon: 'step4',
      name: '4 - Entrega',
      desc: 'Entrega de la orden al cliente justo a tiempo y con una sonrisa.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
