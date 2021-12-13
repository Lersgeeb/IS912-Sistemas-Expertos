import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-lista-de-tweets',
  templateUrl: './lista-de-tweets.component.html',
  styleUrls: ['./lista-de-tweets.component.css']
})
export class ListaDeTweetsComponent implements OnInit {
  tweets = [];

  constructor(
    private usuarioService: UsuarioService,
  ) { }


  ngOnInit(): void {

    this.usuarioService.getTweets().subscribe(
      res => {
        this.tweets=res.body
        console.log(res.body);
      }
    )
  }

}
