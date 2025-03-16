import { Component } from '@angular/core';
import { CommonModule, IMAGE_CONFIG, NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, NgFor, NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers:[
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 10
      }
    },
  ]
})
export class ImageComponent {
  ids = Array.from({length: 10}, (_, i) => i + 400);

  ngOnInit(): void {
    console.log(this.ids);
    
  }
}
