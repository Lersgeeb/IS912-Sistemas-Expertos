import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    usuario: '',
    contrasena: ''
  }

  modalOpen: any = null;

  wrongUser = false;
  @ViewChild ('modalCreacionCategoria') modalCreacionCategoria;
  constructor(
    private modalService: NgbModal,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  openLogin(){
    this.modalOpen = this.modalService.open(this.modalCreacionCategoria, {size: 'lg'});
  }

  login(){
    if(
      this.model.usuario != '',
      this.model.contrasena != ''
    ){
      this.usuarioService.access(this.model.usuario, this.model.contrasena)
      .subscribe(       
        res => {
          if(res.status==200){
            this.modalOpen.close()
          }
        },

        error => {
          if(error.status==400){
            this.wrongUser = true;
            console.log('Entradas incorrectas')
          }
        }
      )
    }
  }
}
