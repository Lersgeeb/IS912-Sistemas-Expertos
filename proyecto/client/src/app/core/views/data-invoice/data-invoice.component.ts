import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-data-invoice',
  templateUrl: './data-invoice.component.html',
  styleUrls: ['./data-invoice.component.scss']
})
export class DataInvoiceComponent implements OnInit {
  order_info = new FormGroup({
    latitude : new FormControl(''),
    longitude : new FormControl(''),
    card_number : new FormControl('', [
      Validators.pattern("^[0-9]{16}$"),
    ]),
    expired_date : new FormControl('', [
      Validators.pattern("^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$"),
    ]), 
    cvv : new FormControl('',[
      Validators.pattern("^[0-9]{3,4}$"),
    ]),
  });
 
  constructor(
    private authService: AuthService,
    private ordersService: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.getProductsOfCart().subscribe(
      res => {
        console.log(res.body)
      }
    )
  }

  handlerOrder(){
    console.log(this.order_info.value)
    this.ordersService.createOrder(this.order_info.value).subscribe(
      res => {
        if(res.status == 200){
          console.log(res.body._id)
          this.router.navigate([`/state-invoice/${res.body._id}`]);
        }
      }
    )
  }

  setLocation($event:any){
    console.log($event)
    console.log($event.lat)
    console.log(this.order_info.controls.latitude.value)
    this.order_info.get('latitude')?.setValue($event.lat)
    this.order_info.get('longitude')?.setValue($event.lng)
  }

}
