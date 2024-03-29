import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NotCompletedComponent } from './components/not-completed/not-completed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ByUserComponent } from './components/by-user/by-user.component';

const routes: Route[] = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'completed',
      component: CompletedComponent
  },
  {
    path: 'not-completed',
    component: NotCompletedComponent
  },
  {
    path: 'by-user',
    component: ByUserComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletedComponent,
    NotCompletedComponent,
    NavbarComponent,
    ByUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
