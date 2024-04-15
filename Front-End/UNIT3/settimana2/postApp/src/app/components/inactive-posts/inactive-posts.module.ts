import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InactivePostsRoutingModule } from './inactive-posts-routing.module';
import { InactivePostsComponent } from './inactive-posts.component';
import { PostCardComponent } from '../post-card/post-card.component';
import { EllipsisPipe } from 'src/app/pipes/ellipsis.pipe';

@NgModule({
  declarations: [InactivePostsComponent, PostCardComponent, EllipsisPipe],
  imports: [
    CommonModule,
    InactivePostsRoutingModule
  ]
})
export class InactivePostsModule { }
