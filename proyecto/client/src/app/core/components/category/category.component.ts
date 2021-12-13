import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() icon = ''; 
  @Input() name = ''; 

  urlIcon = ''

  constructor() { }


  ngOnInit(): void {
    this.urlIcon = `assets/icons/categories/${this.icon}.svg`;

  }

}
