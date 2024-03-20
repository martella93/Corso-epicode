import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InEvidenzaComponent } from './components/in-evidenza/in-evidenza.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PotrebberoPiacertiComponent } from './components/potrebbero-piacerti/potrebbero-piacerti.component';
import { ArticleComponent } from './components/article/article.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InEvidenzaComponent,
    NavbarComponent,
    PotrebberoPiacertiComponent,
    ArticleComponent,
    ActivePostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
