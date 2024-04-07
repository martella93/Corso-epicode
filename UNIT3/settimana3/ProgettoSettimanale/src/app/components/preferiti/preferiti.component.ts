import { Component } from '@angular/core';
import { MoviesPopular } from 'src/app/models/movies-popular.interface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss'],
})
export class PreferitiComponent {
  favorites!: MoviesPopular[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.moviesService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }
  removeFavorite(movie: MoviesPopular) {
    this.favorites = this.favorites.filter(fav => fav.id !== movie.id);
    this.moviesService.updateFavorites(this.favorites);
  }
  
}
