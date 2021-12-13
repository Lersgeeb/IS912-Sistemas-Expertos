import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-delivery-orders-list',
  templateUrl: './delivery-orders-list.component.html',
  styleUrls: ['./delivery-orders-list.component.scss']
})
export class DeliveryOrdersListComponent implements OnInit {

  pendingOrders: any = [];
  doneOrders: any = [];
  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.ordersService.getMyOrders().subscribe(
      res => {
        console.log(res)
        this.doneOrders = res.filter( (order:any) => order.order.delivery_state === 'En destino');
        console.log(this.doneOrders)
        this.pendingOrders = res.filter( (order:any) => order.order.delivery_state != 'En destino');

      }
      
    )
  }

  updateDeliveries(){
    console.log('actualizando...')
    this.ordersService.getMyOrders().subscribe(
      res => {
        this.doneOrders = res.filter( (order:any) => order.order.delivery_state === 'En destino');
        this.pendingOrders = res.filter( (order:any) => order.order.delivery_state != 'En destino');
        console.log(this.doneOrders)
      }   
    )
  }

  isEmpty(array:Array<any>){
    if(array.length === 0) return true;
    else return false;
  }

}
