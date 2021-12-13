import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email','phone','product'];
  dataSource:any = [];
  categories:any = [];
  categorySelected = localStorage.getItem('actualCategory');

  addProductForm = new FormGroup({
  name: new FormControl(''),
  price: new FormControl(''),
  image: new FormControl('')
  });

  addBusinessForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    logo: new FormControl(''),
    banner: new FormControl(''),
    description: new FormControl(''),
    phone_number: new FormControl('')
  })
  
  
  constructor(private categoryService: CategoriesService,private modalService: NgbModal,config: NgbModalConfig) { }

  businessSelected = ''

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    })
  }

  getBusinessByCategory(id_category: any){
    this.categoryService.getBusinessByCategories(id_category).subscribe(res => {
      this.dataSource = res.data.business;
      localStorage.setItem('actualCategory', id_category)
    })
  }

  open(content:any, id_business:string) {
    this.modalService.open(content);
    this.businessSelected = id_business
  }

  openBusinessModal(content:any){
    this.modalService.open(content);
  }

  addProduct(){
    let category = localStorage.getItem('actualCategory');
    this.categoryService.addProductToBusiness(
      category,
      this.businessSelected,
      this.addProductForm.value.name,
      parseInt(this.addProductForm.value.price),
      this.addProductForm.value.image
    ).subscribe(res => {
      console.log('Producto agregado con exito');
      console.log(this.categorySelected);
      console.log(this.businessSelected);
      
      
    })
    this.modalService.dismissAll() 
  }

  addBusiness(){
    let category = localStorage.getItem('actualCategory');
    this.categoryService.addBusinessToCategory(
      category,
      this.addBusinessForm.value.name,
      this.addBusinessForm.value.email,
      this.addBusinessForm.value.logo,
      this.addBusinessForm.value.banner,
      this.addBusinessForm.value.description,
      this.addBusinessForm.value.phone_number
    ).subscribe(res =>{
      console.log('se añadio la empresa con exito');
      this.getBusinessByCategory(category)
    })
    this.modalService.dismissAll()   
    
     
  }
}