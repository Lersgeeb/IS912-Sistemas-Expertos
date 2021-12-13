import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Router } from '@angular/router';
export interface Orders {
  business: string;
  id: number;
  invoice_icon: string,
  state: string,
}

const MY_ORDERS: Orders[] = [
  {id: 1, business: 'PIZZA HUT', invoice_icon: 'assets/icons/commercial-invoice/invoice-icon.svg', state:'Entregado'},
  {id: 2, business: 'BURGER KING', invoice_icon: 'assets/icons/commercial-invoice/invoice-icon.svg',state:'En Proceso'},
  {id: 3, business: 'POPEYES', invoice_icon: 'assets/icons/commercial-invoice/invoice-icon.svg',state:'Pendiente'}
 
];


const delivery_states = [
  'Tomada',
  'En camino',
  'En origen',
  'En destino'
]

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any = []   
  displayedColumns: string[] = ['position', 'name', 'state','weight'];
  dataSource = [];
  constructor(
    private ordersService: OrdersService,
    private router: Router, 
  ) { 
    this.ordersService.ordersDetailedChange.subscribe( res => {
      this.dataSource = res;
      console.log(this.dataSource)
      
    })
    this.ordersService.getOrdersOfUser()
  }

  ngOnInit(): void {
    
   
  }

  translateState(state:string){
    if(state === '') return 'Pendiente'
    else if(state === delivery_states[3]) return 'Entregado'
    else return 'En Proceso' 
  }

  showInvoice(order_id: string){
    this.router.navigate([`/state-invoice/${order_id}`]);
  }

}
