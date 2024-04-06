import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AllFilmsComponent } from './components/all-films/all-films.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'film',
    component: AllFilmsComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path: 'detailsFilm/:id',
    component: FilmDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'utenti',
    component: UtentiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'details',
        component: ProfileDetailsComponent,
      },
      {
        path: 'preferiti',
        component: PreferitiComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AllFilmsComponent,
    UtentiComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    PreferitiComponent,
    FilmCardComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
