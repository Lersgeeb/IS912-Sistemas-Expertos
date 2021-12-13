import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-business',
  templateUrl: './popular-business.component.html',
  styleUrls: ['./popular-business.component.scss']
})
export class PopularBusinessComponent implements OnInit {

  business = [
    {
      name: 'PIZZA HUT',
      logo: 'assets/images/landingPage/pizza-hut-logo.png',
      img: '../../../../assets/images/landingPage/pizza-hut.png'
    },
    {
      name: 'BURGER KING',
      logo: '../../../../assets/images/landingPage/burger-king-logo.png',
      img: '../../../../assets/images/landingPage/burger-king.png'
    },
    {
      name: 'POPEYES',
      logo: '../../../../assets/images/landingPage/popeyes-logo.png',
      img: '../../../../assets/images/landingPage/popeyes.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
