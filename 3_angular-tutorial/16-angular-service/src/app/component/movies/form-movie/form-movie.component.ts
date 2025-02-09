import { MovieService } from './../../../services/movie.service';
import { Movie } from './../../../model/movie.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent implements OnInit {

  name: string
  link: string
  athor: string

  constructor(
    private _service: MovieService
  ) { }

  ngOnInit(): void {
  }

  addMovie() {
    let movie: Movie = {
      id: null,
      name: this.name,
      link: this.link,
      athor: this.athor
    }

    this._service.addMovie(movie)
  }
}
