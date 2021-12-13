import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit {
  order:any = {}
  showLocation = false;
  constructor(
    private ordersService: OrdersService,
  ) { 
    this.ordersService.getOrderDetails().subscribe(
      res => {
        this.order = res;
        console.log(this.order)
        this.showLocation = true;
        console.log(res)    
       }
     )
  }

  ngOnInit(): void {
  }

  get businessName(){
    return this.order.productsDetailed[0].business_name
  }

}
