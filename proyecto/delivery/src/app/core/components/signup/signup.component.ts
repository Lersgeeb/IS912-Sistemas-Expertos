import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  requestSend = false

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
  ) { 
    
  }

  @ViewChild('singUpFormIdentifier') ngForm: any;

  ngOnInit(): void {
  }

  

  handlerSingUp(){
    let client: any = {
      fullname: this.singUpForm.value.fullName,
      email: this.singUpForm.value.email,
      password: this.singUpForm.value.password,
    }

    this.authService.signUp(client).subscribe( 
      (res) => {
        if(res.status==200){
          //this.router.navigate(['/']);
          this.requestSend=true;
          this.ngForm.resetForm()
          
        }
      },
      error => {
        if(error.status==400){
          console.log('Entradas incorrectas')
        }
      })
  }

}
