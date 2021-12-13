import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-invoice',
  templateUrl: './order-invoice.component.html',
  styleUrls: ['./order-invoice.component.scss']
})
export class OrderInvoiceComponent implements OnInit {

  constructor(
    private ordersService: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  takeOrder(){
    this.ordersService.takeOrder().subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/orders/delivery-list']);
      }
    )
  }

}
