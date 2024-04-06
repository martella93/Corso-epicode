import { Component } from '@angular/core';
import { MoviesPopular } from 'src/app/models/movies-popular.interface';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss'],
})
export class PreferitiComponent {
  favorites!: MoviesPopular[];

  constructor() {
    const favoritesStr = localStorage.getItem('favorites');
    if (favoritesStr) {
      this.favorites = JSON.parse(favoritesStr);
    }
  }
}
