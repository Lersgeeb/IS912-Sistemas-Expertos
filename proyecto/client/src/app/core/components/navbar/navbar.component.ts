import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  userIsAuth = false;

  templateStatus = {
    homeActive:false,
    categoriesActive: false,
    cartActive: false,
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
    else if(route.includes('/categories'))
      this.navStatus.categoriesActive = true;  
    else if(route.includes('/cart'))
      this.navStatus.cartActive = true; 
    else if(route.includes('/access'))
      this.navStatus.accessActive = true;   
  }


handlerLogOut(){
  this.authService.logout()
  this.userIsAuth = this.authService.getAuth();
  this.router.navigate(['/access/login'])
}


}
