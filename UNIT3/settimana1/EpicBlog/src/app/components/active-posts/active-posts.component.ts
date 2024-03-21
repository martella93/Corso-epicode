import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  activePosts: Post[]= [];

  constructor(){
    this.getPosts().then((posts) =>{
      this.activePosts = posts.filter((post:Post) => post.active);
    });
  }

  async getPosts() {
    let response = await fetch('assets/db(4).json');
    let data = await response.json();
    return data;
  }

}
