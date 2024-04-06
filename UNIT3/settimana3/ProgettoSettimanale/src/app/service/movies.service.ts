import { Injectable } from '@angular/core';
import { MoviesPopular } from '../models/movies-popular.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiURL = environment.apiURL;
  private favorites: MoviesPopular[] = [];
  private favoritesSubject = new BehaviorSubject<MoviesPopular[]>([]);

  constructor(private http: HttpClient) {
    this.loadFavorites();
  }

  getMovies() {
    return this.http.get<MoviesPopular[]>(`${this.apiURL}movies-popular`);
  }

  getMovieByID(id: number) {
    return this.http.get<MoviesPopular>(`${this.apiURL}movies-popular/${id}`);
  }

  // Aggiorna i preferiti
  updateFavorites(favorites: MoviesPopular[]) {
    this.favorites = favorites;
    this.favoritesSubject.next([...this.favorites]);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  // Ottieni i preferiti
  getFavorites() {
    return this.favoritesSubject.asObservable();
  }

  // Carica i preferiti dal localStorage
  loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
      this.favoritesSubject.next([...this.favorites]);
    }
  }

  // Aggiungi un film ai preferiti
  addFavorite(movie: MoviesPopular) {
    if (!this.isMovieInFavorites(movie)) {
      this.favorites.push(movie);
      this.updateFavorites(this.favorites);
    }
  }

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
