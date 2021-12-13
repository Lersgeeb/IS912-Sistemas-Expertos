import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserSingUp } from 'src/app/core/interfaces/user-sing-up';
import { UserLogin } from 'src/app/core/interfaces/user-login';
import { FormControl, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checkPasswords: ValidatorFn = 
    ( group: AbstractControl ):  ValidationErrors | null => { 
      let pass = group.get('password');
      let confirmPass = group.get('checkPw')
      if(pass && confirmPass){
        return pass.value === confirmPass.value ? null : { notSame: true }
      }
      return { notSame: true };
  }

  singUpForm = new FormGroup({
    fullName : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    checkPw : new FormControl(''),
  }, this.checkPasswords);

  constructor(
    private router: Router, 
    private authService: AuthService   
  ) { }

  ngOnInit(): void {
  }

  handlerSingUp(){
    let client: UserSingUp = {
      fullname: this.singUpForm.value.fullName,
      email: this.singUpForm.value.email,
      password: this.singUpForm.value.password,
    }

    this.authService.signUp(client).subscribe( 
      (res) => {
        if(res.status==200){
          this.router.navigate(['/']);
        }
      },
      error => {
        if(error.status==400){
          console.log('Entradas incorrectas')
        }
      })
  }
}
