import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { MoviesPopular } from 'src/app/models/movies-popular.interface';



@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss'],
})
export class AllFilmsComponent implements OnInit {
  movies!: MoviesPopular[];

  constructor(private moviesSrv: MoviesService) {}

  ngOnInit(): void {
    this.moviesSrv.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
