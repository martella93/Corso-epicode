import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutoInEvidenzaComponent } from './components/auto-in-evidenza/auto-in-evidenza.component';
import { MarchiComponent } from './components/marchi/marchi.component';
import { Error404Component } from './components/error404/error404.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { AutorentComponent } from './components/autorent/autorent.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },
  {
    path: 'audi',
    component: AudiComponent,
  },
  {
    path: '**',
    component: Error404Component,
    
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    AutoInEvidenzaComponent,
    MarchiComponent,
    Error404Component,
    AutorentComponent,
    FiatComponent,
    AudiComponent,
    FordComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
