import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './core/components/login/login.component';
import { UsuarioService } from './core/services/usuario/usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userIsAuth = false;

  constructor(
    private modalService: NgbModal,
    private usuarioService: UsuarioService,
  ) {
    this.userIsAuth = this.usuarioService.auth;

    

    this.usuarioService.authChange.subscribe( res => {
      this.userIsAuth = res;
    })

    this.usuarioService.load()
  }
  

  openLogin(){
    this.modalService.open(LoginComponent, {size: 'lg'});
  }

  logout(){
    this.usuarioService.logout()
  }
}
