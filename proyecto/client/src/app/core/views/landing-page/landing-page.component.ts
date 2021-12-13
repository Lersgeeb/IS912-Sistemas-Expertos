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
      name: '1 - Busca el Local',
      desc: 'Selecciona una categoría y busca un local que te interese. '
    },
    {
      icon: 'step2',
      name: '2 - Escoge la orden',
      desc: 'Una vez dentro de un local, selecciona una orden del catálogo y encargala.'
    },
    {
      icon: 'step3',
      name: '3 - Espera tu pedido',
      desc: 'Después de la compra deberas esperar un corto periodo de tiempo.'
    },
    {
      icon: 'step4',
      name: '4 - Entrega',
      desc: 'Obten tu orden de forma rapida y segura.'
    },
  ]
  
  categories = [
    {
      name: 'Restaurante',
      icon: 'restaurant'
    },
    {
      name: 'Supermercado',
      icon: 'market'
    },
    {
      name: 'Farmacia',
      icon: 'drugStore'
    },
    {
      name: 'Fiesta',
      icon: 'party'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
