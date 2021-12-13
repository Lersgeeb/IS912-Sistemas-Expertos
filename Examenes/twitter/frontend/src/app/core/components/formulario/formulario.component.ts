import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets/tweets.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tweetModel= {
    tweet: '',
    hashtags: ''
  }

  constructor(
    private tweetsService: TweetsService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {

  }

  postTweet(){
    if(this.tweetModel.tweet != ''){
     this.tweetsService.postTweet(this.tweetModel).subscribe(
       res => {
          this.tweetModel.tweet = ''
          this.tweetModel.hashtags = ''

          this.usuarioService.renderAgain()
       }
     )
    }
    
  }

}
