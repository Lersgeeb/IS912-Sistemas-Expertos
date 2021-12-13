import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet:any = {}
  innnerTweetContent = '';
  constructor() { }

  ngOnInit(): void {
    this.innnerTweetContent = this.totalReplace(this.tweet.tweet)
    //content.innerHTML = this.totalReplace(this.tweet.tweet)

  }

  get urlImage(){
    return `http://localhost:8888/${this.tweet.usuario.urlImagen}`
  }

  get hashtagList(){
    return this.tweet.hashtags.split(' ')
  }

  emojiUrl(name){
    return `<img src="http://localhost:8888/img/emojis/${name}.png" alt="">` 
  }

  
  totalReplace(str){
    str = str.replace(':)', this.emojiUrl('emoji1') );
    str = str.replace('XD', this.emojiUrl('emoji2') );
    str = str.replace(':p', this.emojiUrl('emoji3') );
    str = str.replace(':(', this.emojiUrl('emoji4') );
    str = str.replace(':*', this.emojiUrl('emoji5') );
    str = str.replace('X_X', this.emojiUrl('emoji6') );
    str = str.replace('|**|', this.emojiUrl('emoji7') );

    return str
  }

}
