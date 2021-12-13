import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {
  url = 'http://localhost:8888/trending'

  constructor(
    private httpClient: HttpClient
  ) { }

  getTrends(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}`, { observe: 'response' }); 
  }
  
}
