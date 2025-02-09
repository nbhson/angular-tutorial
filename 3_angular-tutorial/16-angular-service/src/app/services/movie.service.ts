import { Movie } from './../model/movie.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [
    new Movie(
      0,
      'Lạc Trôi',
      'https://www.youtube.com/watch?v=Llw9Q6akRo4',
      'Sơn Tùng'
    ),
    new Movie(
      1,
      'Đêm Lao Xao',
      'https://www.youtube.com/watch?v=wxZT4LXXIp4&list=RDwxZT4LXXIp4&start_radio=1',
      'Hòa Minzy'
    ),
  ];

  constructor() {}

  getAllMovies(): Array<Movie> {
    return this.movies;
  }

  addMovie(movie: Movie) {
    movie.id = this.lastId()
    return this.movies.push(movie)
  }

  lastId() {
    return this.movies[this.movies.length - 1].id + 1;
  }
}
