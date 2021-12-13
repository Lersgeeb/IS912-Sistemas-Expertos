import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { DeliveryManService } from 'src/app/services/delivery-man.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  orders: any = []
  order: any = []; 
  deliveryMen: any = [];
  constructor(private ordersService: OrdersService, private deliveryManService: DeliveryManService) { }

  ngOnInit(): void {
    this.getOrders();
    this.getDeliveryMen();
  }

  getOrders(){
    this.ordersService.getPendingOrders().subscribe(res => {
      this.orders = res
      console.log(this.orders);
      
      for(let order of this.orders){
        let singleOrder = {
          business_name: order.business_name,
          business_logo: order.business_logo,
          customer_name: order.customer_name,
          order_id: order.order._id,
          amount: order.order.order_products.length
        }
        this.order.push(singleOrder)
      } 
    })
  }

  getDeliveryMen(){
    this.deliveryManService.getAdmittedDeliveryMen().subscribe(res => {
      this.deliveryMen = res;
      console.log(res);
      
    })
  }

}
