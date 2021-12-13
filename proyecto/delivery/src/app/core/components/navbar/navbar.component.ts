import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userIsAuth = false;

  templateStatus = {
    homeActive:false,
    ordersActive: false,
    accessActive: false,
  }
  navStatus = Object.create(this.templateStatus);
  

  

  constructor(
    private router: Router,
    private authService:AuthService  
  ) {
    
    this.userIsAuth = this.authService.auth;

    this.authService.authChange.subscribe( res => {
      this.userIsAuth = res;
    })
    
    router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd){
        this.setActiveIcon()
      }
    })
   }


  ngOnInit(): void {
    
  }

  setActiveIcon(): void{
    this.navStatus = Object.create(this.templateStatus);
    let route = this.router.url;
    if(route == "/")
      this.navStatus.homeActive = true;  
    else if(route.includes('/order'))
      this.navStatus.ordersActive = true;  
    else if(route.includes('/access'))
      this.navStatus.accessActive = true;   
  }

  handlerLogOut(){
    this.authService.logout()
    this.router.navigate(['/access/login'])
  }
  

  
}
