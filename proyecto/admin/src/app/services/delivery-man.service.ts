import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeliveryManService {

  url = 'http://localhost:8888/delivery'

  constructor(private httpClient: HttpClient) { }

  getAdmittedDeliveryMen(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/admitted`)
  }

  getWaittingToAdmitDeliveryMen(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/waiting-admitted`)
  }

  declineDeliveryMan(id_deliveryMan: string): Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/remove/${id_deliveryMan}`)
  }

  acceptDeliveryMan(id_deliveryMan: string): Observable<any>{
    return this.httpClient.put<any>(`${this.url}/accept_request/${id_deliveryMan}`,{message: 'Motorista Aceptado'})
  }

}
