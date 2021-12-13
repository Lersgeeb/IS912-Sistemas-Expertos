import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  productsOrder:any = []

  constructor(
    private authService: AuthService,
  ) { }



  ngOnInit(): void {
    this.authService.getProductsOfCart().subscribe(
      res => {
        this.productsOrder = res.body
      }
    )
  }

  get renderProductBoolean(){
    return (this.productsOrder.length > 0)
  }

  updateCart(){
    this.authService.getProductsOfCart().subscribe(
      res => {
        this.productsOrder = res.body
      }
    )
  }
}
