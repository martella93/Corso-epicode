import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  posts!: Post[];
  randomIndex: number = 0;

  constructor() {
    this.getPosts().then((posts) => {
      this.posts = posts;
      this.selectRandomPostIndex();
    });
  }
  async getPosts() {
    let response = await fetch('assets/db(4).json');
    let data = await response.json();
    return data;
  }
  selectRandomPostIndex(): void {
    if (this.posts && this.posts.length > 0) {
      this.randomIndex = Math.floor(Math.random() * this.posts.length);
    }
  }
}
