import { Component, Input, OnInit } from '@angular/core';
import { MoviesPopular } from 'src/app/models/movies-popular.interface';
import { MoviesService } from 'src/app/service/movies.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent implements OnInit {
  @Input() movies!: MoviesPopular;
  isFavorite: boolean = false;

  constructor(private moviesSrv: MoviesService, private authSrv: AuthService){}
ngOnInit(): void {
  this.isFavorite = this.moviesSrv.isMovieInFavorites(this.movies);
}
toggleFavorite(): void {
  this.isFavorite = !this.isFavorite;
    const currentUser = this.authSrv.getCurrentUser(); // Ottieni l'utente corrente
    if (currentUser) {
      const userIdentifier = currentUser.user.id; // Ottieni l'identificatore univoco dell'utente
      if (this.isFavorite) {
        this.moviesSrv.addFavorite(this.movies); // Aggiungi il film ai preferiti per l'utente corrente
      } else {
        this.moviesSrv.removeFavorite(this.movies); // Rimuovi il film dai preferiti per l'utente corrente
      }
    }
  }

}
