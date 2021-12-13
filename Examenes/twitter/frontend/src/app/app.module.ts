import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './core/components/perfil/perfil.component';
import { TrendsComponent } from './core/components/trends/trends.component';
import { FormularioComponent } from './core/components/formulario/formulario.component';
import { TweetComponent } from './core/components/tweet/tweet.component';
import { ListaDeTweetsComponent } from './core/components/lista-de-tweets/lista-de-tweets.component';
import { LoginComponent } from './core/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    TrendsComponent,
    FormularioComponent,
    TweetComponent,
    ListaDeTweetsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
