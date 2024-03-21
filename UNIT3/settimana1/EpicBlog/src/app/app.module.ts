import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InEvidenzaComponent } from './components/in-evidenza/in-evidenza.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PotrebberoPiacertiComponent } from './components/potrebbero-piacerti/potrebbero-piacerti.component';
import { ArticleComponent } from './components/article/article.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { Error404Component } from './components/error404/error404.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'primo',
    component: ActivePostsComponent,
  },
  {
    path: 'secondo',
    component: InactivePostsComponent,
  },
  {
    path: 'details',
    component: PostDetailsComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InEvidenzaComponent,
    NavbarComponent,
    PotrebberoPiacertiComponent,
    ArticleComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
