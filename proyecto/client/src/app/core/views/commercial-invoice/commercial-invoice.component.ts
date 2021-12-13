import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-commercial-invoice',
  templateUrl: './commercial-invoice.component.html',
  styleUrls: ['./commercial-invoice.component.scss']
})
export class CommercialInvoiceComponent implements OnInit {
  showInvoice = false;
  invoice:any = []
  constructor(
    private ordersService: OrdersService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProductsOfCart().subscribe( _ => {
      this.invoice = this.ordersService.currentCart;
      this.showInvoice = true;
    })
  }

}
