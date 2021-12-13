import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
  @Output() needUpdate = new EventEmitter();
  @Input() product:any = {}
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  remove(){
    console.log(this.product)
    this.authService.removeProductFromCart(this.product.info._id).subscribe(
        res => {
          console.log(res)
          if(res.resp.nModified === 1){
            console.log('update')
            this.update();
          } 
        }
    )
  }

  update(){
    this.needUpdate.emit();
  }

}
