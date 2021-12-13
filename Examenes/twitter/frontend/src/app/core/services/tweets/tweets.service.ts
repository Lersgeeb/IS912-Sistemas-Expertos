import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  url = 'http://localhost:8888/tweet'
  constructor(
    private httpClient: HttpClient
  ) { }

  postTweet(tweet): Observable<any>{
    let user_id = localStorage.getItem('user_id');
    let newTweet = {
      ...tweet,
      idUsuario: user_id
    }
    return this.httpClient.post<any>(`${this.url}`, newTweet, { observe: 'response' }); 
  }
}
