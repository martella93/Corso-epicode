import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    
    {
        path: 'activePosts/:id',
        component: PostDetailsComponent,
    },
    {
        path: 'inactivePosts/:id',
        component: PostDetailsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: ':id',
                component: UserDetailsComponent
            }
        ]
    },
    {
        path: '**',
        component: Error404Component,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        HighlightDirective,
        UsersComponent,
        UserDetailsComponent,
        EllipsisPipe,
        PostDetailsComponent,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
