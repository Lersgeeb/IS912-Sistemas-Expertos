import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoriesService} from 'src/app/services/categories/categories.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  restaurants: any [] =  [
    {
      name:'Pizza Hut',
      resource:'pizza-hut'
    },
    {
      name:'Burger King',
      resource:'burger-king'
    },
    {
      name:'Popeyes',
      resource:'popeyes'
    },
  ]

  listCategoryBusiness: any[] = [
    {
      name: 'Restaurantes',
      list: this.restaurants
    },
  ]

  currentCategory: any = {}
  category: string | null = null;

  get iconSvgRoute(){
    if(this.currentCategory.logo){
      return `assets/icons/categories/${this.currentCategory.logo}.svg`
    }
    return ''
  } 
  newRoute = '';

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category_id');
      if(typeof this.category === 'string'){
        this.categoriesService.getAllBusinessOfCategory(this.category).subscribe(
          res => {
            this.currentCategory = res.data
          }
        )
      }
    })
  }
  handlerChangeRoute(business_id:string) {
    this.newRoute = `${this.router.url}/business-details/${business_id}`;
    this.router.navigate([this.newRoute]);
  }
  

}
