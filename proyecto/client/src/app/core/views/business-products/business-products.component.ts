import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AmountInputModalComponent} from 'src/app/core/modal/amount-input-modal/amount-input-modal.component'


@Component({
  selector: 'app-business-products',
  templateUrl: './business-products.component.html',
  styleUrls: ['./business-products.component.scss']
})
export class BusinessProductsComponent implements OnInit {
  faPlus = faPlus;
  category_id: (string | null) = "";
  business_id: (string | null) = "";
  business:any = {};
  showBusiness = false;
  amount= 0;
  isAuth = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      this.category_id = params.get('category_id');
      this.business_id = params.get('business_id');

      if(
        typeof this.category_id === 'string' &&
        typeof this.business_id === 'string' 
      ){
        this.categoriesService.getAllProductsOfBusiness(this.category_id, this.business_id).subscribe(
          res => {
            this.business = res.business;
            this.showBusiness = true;
            console.log(res)
          }
        )

        this.isAuth = this.authService.auth;
      }
    })
  }

  openDialog(product_id:string): void {
    console.log(product_id)
    const dialogRef = this.dialog.open(AmountInputModalComponent, {
      width: '250px',
      data: {amount: this.amount},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.amount = result
      if(this.amount > 0){
        this.authService.addProductToCart(product_id, this.amount)
      }
    });
  }

  get backButton(){
    let cat_id = this.category_id
    if( ( cat_id != "") && ( cat_id != null) )
      return `/categories/cat_business/${cat_id}`
    else
      return `/categories`
  }


}
