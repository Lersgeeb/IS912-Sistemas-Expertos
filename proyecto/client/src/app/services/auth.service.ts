import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserSingUp } from 'src/app/core/interfaces/user-sing-up';
import { UserLogin } from 'src/app/core/interfaces/user-login';
import { OrdersService } from './orders/orders.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `http://localhost:8888/customers`
  auth= false;
  authChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private ordersService: OrdersService
  ) { 
    this.authChange.subscribe( (value) => {
      this.auth = value
    });
    let token = localStorage.getItem('token');
    if(token){
      this.authChange.next(true)
    }


  }

  getAuth(){
      return this.auth;
  }

  signUp(client:UserSingUp): Observable<any>{  
    let $SignUpObs = this.httpClient.post<any>(`${this.url}/signup`, client, { observe: 'response' })
    $SignUpObs.subscribe( res => {
      if(res.status==200){
        localStorage.setItem('token', res.body.token);
        localStorage.setItem('user_id', res.body.resp._id);
        this.authChange.next(true)
      }
    })
    return $SignUpObs;
  }

  access(client:UserLogin): Observable<any>{
    let $loginObs =  this.httpClient.post<any>(`${this.url}/login`, client, { observe: 'response' })    
    $loginObs.subscribe(res => {
      if(res.status==200){
        localStorage.setItem('token', res.body.token);
        localStorage.setItem('user_id', res.body.resp._id);
        this.authChange.next(true)
      }
    })
    return $loginObs;
  }

  addProductToCart(product_id:string, amount:number): Observable<any>{
    const userId = localStorage.getItem('user_id');
    const body = {
      product_id: product_id,
      amount: amount
    }
    let $loginObs =  this.httpClient.put<any>(`${this.url}/${userId}/add-product`, body, { observe: 'response' })    
    $loginObs.subscribe(res => {
      if(res.status==200){
        console.log('Agregada al carrito')
        console.log(res.body)
      }
    })
    return $loginObs;
  }

  removeProductFromCart(product_id:string): Observable<any>{
    const userId = localStorage.getItem('user_id');
    return this.httpClient.put<any>(`${this.url}/${userId}/product/${product_id}/delete`, { observe: 'response' })    
  }

  getProductsOfCart(): Observable<any>{
    const userId = localStorage.getItem('user_id');
    let $cartProductsObs =  this.httpClient.get<any>(`${this.url}/cart/${userId}`, { observe: 'response' })    
    $cartProductsObs.subscribe(
      res => {
        if(res.body.length > 0){
          let order = {
            business_id: res.body[0].business_id,
            client_id: userId,
            order_products: res.body
          }
          this.ordersService.setCurrentCart(order)
        }
      }
    )
    
    return $cartProductsObs;
  }
  
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this.authChange.next(false)
  }
}
