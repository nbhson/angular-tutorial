import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from './service/resource.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [JsonPipe]
})
export class AppComponent implements OnInit {
 
  resource = inject(ResourceService);

  ngOnInit(): void {
    this.resource.onTodoChange('2')
    this.resource.reloadTodo();
  }

}
