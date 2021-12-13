import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-order-option',
  templateUrl: './order-option.component.html',
  styleUrls: ['./order-option.component.scss']
})


export class OrderOptionComponent implements OnInit {
  @Input() order: any = {}
  faChevronRight = faChevronRight
  constructor(
    private router: Router, 
    private ordersService: OrdersService, 
  ) { }

  ngOnInit(): void {
  }

  showOrderDetails(orderId:string){
    this.ordersService.setOrderDetailed(orderId);
    this.router.navigate(['/order-detail/invoice']);
  }

}
