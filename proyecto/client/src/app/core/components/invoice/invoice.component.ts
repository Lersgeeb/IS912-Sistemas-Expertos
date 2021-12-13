import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  sub = 0.0;
  price=0.0;
  isv = 0.0;
  admin_commision = 0.0;
  delivery_commision = 0.0;
  total = 0;
  @Input() orders: any = [];
  
  

  constructor() { 
  
    

  }

  ngOnInit(): void {
    this.subtotal();
    this.totalInvoice();
  }


  subtotal(): void{
    if(this.orders){
      for(let i=0;i<this.orders.length;i++){
          console.log(this.orders[i])
          this.price = this.floatFixed(this.orders[i].info.price*this.orders[i].amount);
          this.sub += this.floatFixed(this.price);
      }  
    }
  }

  totalInvoice(): void{
    this.isv = this.floatFixed(this.sub*0.15);
    this.admin_commision = this.floatFixed(this.sub*0.10);
    this.delivery_commision = this.floatFixed(this.sub*0.05);
    this.total = this.floatFixed( this.isv + this.admin_commision +this.delivery_commision + this.sub);
  }

  floatFixed(num:number): number{
    return parseFloat(num.toFixed(2))
  }
}
