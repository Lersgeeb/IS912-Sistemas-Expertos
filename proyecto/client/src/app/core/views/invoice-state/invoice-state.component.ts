import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders/orders.service';
const delivery_states = [
  'Tomada',
  'En camino',
  'En origen',
  'En destino'
]

@Component({
  selector: 'app-invoice-state',
  templateUrl: './invoice-state.component.html',
  styleUrls: ['./invoice-state.component.scss']
})
export class InvoiceStateComponent implements OnInit {
  showInvoice = false
  state = "";
  order: any = {}
  order_id: (string | null)  = ''
  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
  ) {
    
    this.ordersService.currentOrderChange.subscribe( res => {
      this.order = res;
      console.log(this.order)
    })
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      this.order_id = params.get('order_id');
      if( typeof this.order_id === 'string')
        this.ordersService.getDeepDetailedOrder(this.order_id).subscribe(
          _ => this.showInvoice = true

        )
    })
  }

  invoiceState(): void{
    this.state = this.order.state;
  }

  translateState(state:string){
    if(state === '') return 'Pendiente'
    else if(state === delivery_states[3]) return 'Entregado'
    else return 'En Proceso' 
  }
}
