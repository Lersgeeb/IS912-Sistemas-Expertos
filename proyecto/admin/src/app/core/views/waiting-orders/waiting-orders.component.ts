import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-waiting-orders',
  templateUrl: './waiting-orders.component.html',
  styleUrls: ['./waiting-orders.component.scss']
})
export class WaitingOrdersComponent implements OnInit {

  pending_orders: any = []
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.ordersService.getActiveOrders().subscribe(res => {
      this.pending_orders = res
      console.log(this.pending_orders);
      
    })
  }

}
