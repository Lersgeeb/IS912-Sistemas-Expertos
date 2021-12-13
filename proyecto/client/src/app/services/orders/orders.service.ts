import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CategoriesService } from '../categories/categories.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url = `http://localhost:8888/orders`
  currentCart:any = {}

  currentOrder:any = {}
  currentOrderChange:Subject<any> = new Subject<any>();

  orders_detailed = []
  ordersDetailedChange: Subject<any> = new Subject<any>();
  constructor(
    private httpClient: HttpClient,
    private categoriesService: CategoriesService
  ) { 
    this.ordersDetailedChange.subscribe( (value) => {
      this.orders_detailed = value
    });
    this.currentOrderChange.subscribe( (value) => {
      this.currentOrder = value
    });
  }

  setCurrentCart(cart:any){
    this.currentCart = cart
    console.log(cart)
  }

  createOrder(location_payment_info: any): Observable<any>{
    

    let payment_info = {
      card_number: location_payment_info.card_number,
      expired_date: location_payment_info.expired_date,
      cvv   : location_payment_info.cvv,
    }
    let location = {
      latitude: location_payment_info.latitude,
      longitude: location_payment_info.longitude,
    }
    console.log(this.currentCart)
    let newOrder= {
      payment_info: payment_info,
      location: location,
      business_id: this.currentCart.business_id,
      client_id: this.currentCart.client_id,
      order_products: this.currentCart.order_products.map( (order:any) => {
        return {
          product_id: order.info._id,
          amount:  order.amount
        }
      }
    )}
    return this.httpClient.post<any>(`${this.url}`, newOrder, { observe: 'response' })
  }

  getOrdersOfUser(){
    const userId = localStorage.getItem('user_id');
    this.httpClient.get<any>(`${this.url}/myorders/${userId}`, { observe: 'response' }).subscribe(
      res => {
        this.ordersDetailedChange.next(res.body)        
      }
    )
  }

  getDeepDetailedOrder(order_id:string): Observable<any>{
    let $deepDetailedOrderObs = this.httpClient.get<any>(`${this.url}/order_deep_detailed/${order_id}`)
    $deepDetailedOrderObs.subscribe(
      res => {
        this.currentOrderChange.next(res)
      }
    )
    return $deepDetailedOrderObs;

  }

}
