import { Injectable } from '@angular/core';
import { MoviesPopular } from '../models/movies-popular.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiURL = environment.apiURL;
  private favorites: MoviesPopular[] = [];
  private favoritesKeyPrefix = 'favorites_'; // Aggiungi un prefisso per distinguere i preferiti per ogni utente
  private favoritesSubject = new BehaviorSubject<MoviesPopular[]>([]);

  constructor(private http: HttpClient, private authSrv: AuthService) {
    
  }

  getMovies() {
    return this.http.get<MoviesPopular[]>(`${this.apiURL}movies-popular`);
  }

  getMovieByID(id: number) {
    return this.http.get<MoviesPopular>(`${this.apiURL}movies-popular/${id}`);
  }
  

  // Aggiorna i preferiti
  updateFavorites(favorites: MoviesPopular[]) {
    const userId = this.authSrv.getCurrentUser(); // Ottieni l'ID dell'utente corrente
    if (userId) {
      this.favorites = favorites;
      this.favoritesSubject.next([...this.favorites]);
      localStorage.setItem(`${this.favoritesKeyPrefix}${userId}`, JSON.stringify(this.favorites));
    }
  }

  // Ottieni i preferiti
  getFavorites() {
    return this.favoritesSubject.asObservable();
  }
  /*getFavorites(userId: string): MoviesPopular[] | null {
    const favoritesJson = localStorage.getItem(`${this.favoritesKeyPrefix}${userId}`);
    return favoritesJson ? JSON.parse(favoritesJson) : null;
  }*/
  
 
  // Aggiungi un film ai preferiti
  addFavorite(movie: MoviesPopular) {
    if (!this.isMovieInFavorites(movie)) {
      this.favorites.push(movie);
      this.updateFavorites(this.favorites);
    }
  }


  /*addFavorite(movie: MoviesPopular, userId: string): void {
    const favorites = this.getFavorites(userId) || [];
    favorites.push(movie);
    localStorage.setItem(`${this.favoritesKeyPrefix}${userId}`, JSON.stringify(favorites));
  }*/

  // Rimuovi un film dai preferiti
  removeFavorite(movie: MoviesPopular) {
    this.favorites = this.favorites.filter(fav => fav.id !== movie.id);
    this.updateFavorites(this.favorites);
  }

  // Controlla se un film è nei preferiti
  isMovieInFavorites(movie: MoviesPopular) {
    return this.favorites.some(fav => fav.id === movie.id);
  }
  
}
