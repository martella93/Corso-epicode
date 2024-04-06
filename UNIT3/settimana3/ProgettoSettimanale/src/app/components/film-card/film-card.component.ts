import { Component, Input, OnInit } from '@angular/core';
import { MoviesPopular } from 'src/app/models/movies-popular.interface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent implements OnInit {
  @Input() movies!: MoviesPopular;
  isFavorite: boolean = false;

  constructor(private moviesSrv: MoviesService){}
ngOnInit(): void {
  this.isFavorite = this.moviesSrv.isMovieInFavorites(this.movies);
}
toggleFavorite(): void {
  this.isFavorite = !this.isFavorite;
  if (this.isFavorite) {
    this.moviesSrv.addFavorite(this.movies);
  } else {
    this.moviesSrv.removeFavorite(this.movies);
  }
}
}
