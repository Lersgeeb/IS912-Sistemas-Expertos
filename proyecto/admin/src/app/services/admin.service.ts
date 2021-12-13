import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 url = 'http://localhost:8888/admin'

  constructor(private httpClient: HttpClient) { }

  login(email:string,password:string): Observable<any>{
    return this.httpClient.post<any>(`${this.url}/login`,{email:email, password:password})
  }
}
