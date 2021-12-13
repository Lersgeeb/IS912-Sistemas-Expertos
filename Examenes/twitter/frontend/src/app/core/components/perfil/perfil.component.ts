import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any = {}
  constructor(
    private usuarioService: UsuarioService,
  ) { 
    this.usuarioService.userChange.subscribe( res => {
      this.usuario = res;
    })
  }

  ngOnInit(): void {
    this.usuarioService.getUserInfo().subscribe
  }

  get followersAmount(){
    if(this.usuario.followers)
      return this.usuario.followers.length
    else 
       return ''
  }

  get followingAmount(){
    if(this.usuario.following)
      return this.usuario.following.length
    else
      return ''
  }

  get urlImage(){
    if(this.usuario.urlImagen)
      return `http://localhost:8888/${this.usuario.urlImagen}`
    else
      return ''
  }

}
