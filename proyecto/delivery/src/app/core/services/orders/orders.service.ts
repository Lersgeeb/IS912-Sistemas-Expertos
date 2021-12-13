import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url = `http://localhost:8888/orders`
  
  orders_detailed = ''
  ordersDetailedChange: Subject<any> = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
  ) { 
    this.ordersDetailedChange.subscribe( (value) => {
      this.orders_detailed = value
    });
  }

  getOrdersAvailable(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/available_orders`);
  }

  getMyOrders(): Observable<any>{
    const userId = localStorage.getItem('user_id');
    return this.httpClient.get<any>(`${this.url}/mydelivery/${userId}`);
  }

  setOrderDetailed(orderId:string){
    this.ordersDetailedChange.next(orderId)
  }

  getOrderDetails(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/order_deep_detailed/${this.orders_detailed}`);
  }

  takeOrder():  Observable<any>{
    const userId = localStorage.getItem('user_id');
    let assign = {
      order_id: this.orders_detailed,
      delivery_man_id: userId
    }
    return this.httpClient.put<any>(`${this.url}/assign_delivery_man`, assign);
  }

  changeState(state:string, orderId:string):  Observable<any>{
    let stateOrder = {
      order_id: orderId, 
      state: state,
    }
    console.log(stateOrder)
    return this.httpClient.put<any>(`${this.url}/set_state`, stateOrder);
  }



}
