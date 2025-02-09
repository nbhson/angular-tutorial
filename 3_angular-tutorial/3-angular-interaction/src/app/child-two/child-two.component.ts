import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  @Input() users: any[]

  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource: MatTableDataSource<any>

  constructor() {
    this.dataSource = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.dataSource.data = this.users
  }

}
