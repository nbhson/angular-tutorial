import { MovieService } from './../../../services/movie.service';
import { Movie } from './../../../model/movie.class';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'link', 'athor'];
  dataSource: MatTableDataSource<Movie>

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _service: MovieService,
  ) {
    this.dataSource = new MatTableDataSource<Movie>([]);
  }

  ngDoCheck(): void {
    console.log(this._service.getAllMovies());
  }

  ngOnInit(): void {
    this.dataSource.data = this._service.getAllMovies()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
