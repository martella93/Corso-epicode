import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesPopular } from 'src/app/models/movies-popular.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit {
  movie!: MoviesPopular; 

  constructor(
    private router: ActivatedRoute,
    private moviesSrv: MoviesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.moviesSrv.getMovieByID(id).subscribe((data) => { 
        this.movie = data; 
      });
    });
  }
}
