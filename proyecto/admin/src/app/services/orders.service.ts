import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url = 'http://localhost:8888/orders'
  url1 = 'http://localhost:8888/customers'

  constructor(private httpClient: HttpClient) { }

  getPendingOrders(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/available_orders`)
  }

  assignDeliveryManToOrder(id_order: any, id_deliveryMan:any): Observable<any>{
    return this.httpClient.put<any>(`${this.url}/assign_delivery_man`,{order_id: id_order,delivery_man_id: id_deliveryMan})
  }

  getActiveOrders(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/active_orders`)
  }

  getCustomer(id_customer:any): Observable<any>{
    return this.httpClient.get<any>(`${this.url1}/${id_customer}`)
  }
}
