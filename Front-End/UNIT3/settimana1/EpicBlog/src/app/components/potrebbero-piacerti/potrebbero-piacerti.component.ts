import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-potrebbero-piacerti',
  templateUrl: './potrebbero-piacerti.component.html',
  styleUrls: ['./potrebbero-piacerti.component.scss'],
})
export class PotrebberoPiacertiComponent {
  posts!: Post[];
  randomIndexes: number[] = [];

  constructor() {
    this.getPosts().then((posts) => {
      this.posts = posts;
      this.selectRandomPostIndexes();
    });
  }

  async getPosts() {
    let response = await fetch('assets/db(4).json');
    let data = await response.json();
    return data;
  }

  selectRandomPostIndexes(): void {
    if (this.posts && this.posts.length > 0) {
      while (this.randomIndexes.length < 4) {
        const randomIndex = Math.floor(Math.random() * this.posts.length);
        if (!this.randomIndexes.includes(randomIndex)) {
          this.randomIndexes.push(randomIndex);
        }
      }
    }
  }
}