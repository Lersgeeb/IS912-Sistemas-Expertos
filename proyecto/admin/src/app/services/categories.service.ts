import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url= 'http://localhost:8888/categories'

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<any>{
    return this.httpClient.get<any>(this.url)
  }

  getBusinessByCategories(id_category: string): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/${id_category}/business`)
  }

  addBusinessToCategory(
    id_category: any,
    name: string,
    email: string,
    logo: string,
    banner: string,
    description: string,
    phone_number: string
    ): Observable<any>{
    return this.httpClient.put<any>(`${this.url}/${id_category}/add-business`,
    {name:name,email:email,logo:logo,banner:banner,description:description,phone_number:phone_number})
  }

  addProductToBusiness(
    id_category: any,
    id_business: string,
    name: string,
    price: number,
    image: string
  ): Observable<any>{
    return this.httpClient.put<any>(`${this.url}/${id_category}/business/${id_business}/add-product`,
    {name:name, price:price, image:image})
  }

}
