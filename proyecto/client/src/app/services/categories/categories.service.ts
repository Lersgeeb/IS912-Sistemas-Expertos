import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:8888/categories'

  currentCategory = '';
  currentBusiness = '';
  currentProduct = '';
  currentCategoryChange: Subject<string> = new Subject<string>();

  constructor(
    private httpClient: HttpClient
  ) { 

    //Change category state on all components
    this.currentCategoryChange.subscribe( (value) => {
      this.currentCategory = value
    });
  }

  getAllCategories(): Observable<any>{
    return this.httpClient.get<any>(this.url)
  }

  getAllBusinessOfCategory(categoryId:string): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/${categoryId}/business`)
  }

  getAllProductsOfBusiness( categoryId:string, businessId:string ): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/${categoryId}/business/${businessId}`)
  }

  getBusinessInfo(businessId:string): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/business/${businessId}`)
  }
}
