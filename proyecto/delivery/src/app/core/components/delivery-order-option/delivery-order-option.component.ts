import { 
  Component, 
  OnInit, 
  Input,
  Output, 
  EventEmitter
} from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { OrdersService } from '../../services/orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-order-option',
  templateUrl: './delivery-order-option.component.html',
  styleUrls: ['./delivery-order-option.component.scss']
})
export class DeliveryOrderOptionComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  @Output() needUpdate = new EventEmitter();
  @Input() order:any = null;
  link = '/order-picked-detail/invoice'
  selectedState = ''
  
  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }


  ngOnInit(): void {
    
    this.selectedState = this.order.order.delivery_state
  }

  showDetails(orderId:string){
    this.ordersService.setOrderDetailed(orderId);
    this.router.navigate(['/order-picked-detail/invoice']);
  }

  handlerChangeState(event:any){
    let prevState = this.order.order.delivery_state;
    let nextState = event.target.value;
    this.ordersService.changeState(nextState, this.order.order._id).subscribe(
      res => {
        if(res.nModified === 1){
          
          if(
            prevState === 'En destino' ||
            nextState === 'En destino' 
          ){
            this.update();
          }
        }
      }
    )
  }

  update() {
    console.log('need Update')
    this.needUpdate.emit();
  }

}
