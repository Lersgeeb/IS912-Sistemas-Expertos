import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesService} from 'src/app/services/categories/categories.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  renderCategories = false;
  categories = [
    {
      _id:'',
      name:'',
      logo:''
    }
  ]

  newRoute = '';

  constructor(
    private categoriesService: CategoriesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe( res => {
      if(res.length > 0){
        this.categories = res
        this.renderCategories = true;
      }
    })

    this.newRoute = `${this.route.url}/cat_business/1`;
  }

  handlerChangeRoute(category_id:string) {
    this.newRoute = `${this.route.url}/cat_business/${category_id}`;
    this.route.navigate([this.newRoute]);
  }

}
