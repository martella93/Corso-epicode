import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'active-posts',
    loadChildren: () => import('./components/active-posts/active-posts.module').then((m) => m.ActivePostsModule),

  },
  {
    path: 'inactive-posts',
    loadChildren: () => import('./components/inactive-posts/inactive-posts.module').then((m) => m.InactivePostsModule),
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), 
    FormsModule,
    CommonModule
  ]
})
export class AppRoutingModule { 

}
