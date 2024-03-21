import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  inactivePosts: Post[] = [];

  constructor() {
    this.getPosts().then((posts) => {
      this.inactivePosts = posts.filter((post: Post) => !post.active);
    });
  }

  async getPosts() {
    let response = await fetch('assets/db(4).json');
    let data = await response.json();
    return data;
  }
}
