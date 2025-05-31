import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ELEMENT_DATA } from './const/data-source';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatTableModule, NgFor, MatInputModule, MatIconModule, ScrollingModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  displayedFilterColumns: string[] = ['position_second', 'name_second', 'weight_second'];
  dataSource = ELEMENT_DATA;
  
  isRow(index: number, item: any): boolean {
    return true; // Điều kiện của hàng mặc định
  }
}
