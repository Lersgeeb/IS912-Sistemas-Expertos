import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders: any = []

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.ordersService.getOrdersAvailable().subscribe(
      res => {
        console.log(res);
        this.orders = res;
      }
    )
  }

}
