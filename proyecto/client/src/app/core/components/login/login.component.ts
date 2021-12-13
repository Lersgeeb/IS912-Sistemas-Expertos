import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from 'src/app/core/interfaces/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(''),
    pw : new FormControl(''),
  });

  wrongInput = false;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  handlerLogin(){
    let client: UserLogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.pw,
    }

    this.authService.access(client).subscribe(
      res => {
        if(res.status==200){
          this.router.navigate(['/']);
        }
      },
      error => {
        if(error.status==400){
          this.wrongInput = true;
          console.log('Entradas incorrectas')
        }
      }
    )

  }

}
