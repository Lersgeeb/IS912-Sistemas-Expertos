import { Injectable } from '@angular/core';
import { Subject,  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:8888/usuario'
  auth= false;
  authChange: Subject<boolean> = new Subject<boolean>();
  user:any = {}
  userChange: Subject<any> = new Subject<any>();

  constructor(
    private httpClient: HttpClient
  ) { 
    this.authChange.subscribe( (value) => {
      this.auth = value
    });
  }
  
  load(){
    let userId = localStorage.getItem('user_id');
    if(userId != null){
      this.authChange.next(true)
    }
  }
  
  access(usuario:string, contrasena:string,): Observable<any>{
    let login = {
      usuario: usuario,
      contrasena: contrasena,
    }
    let $loginObs =  this.httpClient.post<any>(`${this.url}/login`, login, { observe: 'response' })    
    $loginObs.subscribe(res => {
      if(res.status==200){
        localStorage.setItem('user_id', res.body.user._id);
        this.authChange.next(true)
      }
    })
    return $loginObs;
  }

  logout(){
    localStorage.removeItem('user_id');
    this.authChange.next(false)
  }

  getUserInfo(): Observable<any>{
    let user_id = localStorage.getItem('user_id');
    let $userInfo = this.httpClient.get<any>(`${this.url}/info/${user_id}`, { observe: 'response' });
    $userInfo.subscribe(
      res => {
        this.userChange.next(res.body) 
      }
    )

    return $userInfo
  }

  
  getTweets(): Observable<any>{
    let user_id = localStorage.getItem('user_id');
    return this.httpClient.get<any>(`${this.url}/following_tweets/${user_id}`, { observe: 'response' }); 
  }

  renderAgain(){
    let user_id = localStorage.getItem('user_id');
    this.httpClient.get<any>(`${this.url}/info/${user_id}`, { observe: 'response' }).subscribe(
      res => {
        this.userChange.next(res.body) 
      }
    )
    
  }

}
