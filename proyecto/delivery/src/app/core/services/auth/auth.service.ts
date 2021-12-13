import { Injectable } from '@angular/core';
import { Subject,  Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `http://localhost:8888/delivery`
  auth= false;
  authChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
  ) { 
    this.authChange.subscribe( (value) => {
      this.auth = value
    });

    let token = localStorage.getItem('token');
    if(token){
      this.authChange.next(true)
    }
  }

  
  signUp(client:any): Observable<any>{  
    return this.httpClient.post<any>(`${this.url}/request`, client, { observe: 'response' })
  }
  
  access(login:any): Observable<any>{
    let $loginObs =  this.httpClient.post<any>(`${this.url}/login`, login, { observe: 'response' })    
    $loginObs.subscribe(res => {
      if(res.status==200){
        localStorage.setItem('token', res.body.token);
        localStorage.setItem('user_id', res.body.resp._id);
        this.authChange.next(true)
      }
    })
    return $loginObs;
  }


  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this.authChange.next(false)
  }
}
