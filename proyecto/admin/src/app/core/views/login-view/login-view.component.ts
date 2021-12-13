import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  adminForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.adminService.login(this.adminForm.value.email,this.adminForm.value.password).subscribe( res=> {
      this.router.navigate(['/main/business'])
    })
  }

}
