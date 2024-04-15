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
    const currentUser = this.authSrv.getCurrentUserId(); // Ottieni l'utente corrente
    console.log(currentUser)
    if (currentUser) {
        this.moviesSrv.addFavorite(this.movies); // Aggiungi il film ai preferiti per l'utente corrente
      } else {
        this.moviesSrv.removeFavorite(this.movies); // Rimuovi il film dai preferiti per l'utente corrente
      }
    }
  }

  /*toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    const userId = this.authSrv.getCurrentUserId();
  
    if (userId) {
      if (this.isFavorite) {
        this.moviesSrv.addFavorite(this.movies, userId)
          .subscribe(response => {
            // Gestisci aggiunta avvenuta con successo (opzionale)
          }, error => {
            console.error("Errore durante l'aggiunta ai preferiti:", error);
          });
      } else {
        this.moviesSrv.removeFavorite(this.movies.id, userId)
          .subscribe(response => {
            // Gestisci rimozione avvenuta con successo (opzionale)
          }, error => {
            console.error("Errore durante la rimozione dai preferiti:", error);
          });
      }
    } else {
      console.warn("Utente non autenticato, impossibile salvare i preferiti.");
    }
  }*/


