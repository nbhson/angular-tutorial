import { Component } from '@angular/core';
import { CommonModule, IMAGE_CONFIG, NgFor, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import {onLCP, onINP, onCLS} from 'web-vitals';

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
    // provideImgixLoader("<https://maciejwojcik.imgix.net>")
  ]
})
export class ImageComponent {
  readonly heroImage = 'pizza-hero.jpg';
  ids = Array.from({length: 15}, (_, i) => i + 400);

  ngOnInit(): void {
    console.log(this.ids);
    onCLS(console.log, {reportAllChanges: true});
    onINP(console.log, {reportAllChanges: true});
    onLCP(console.log, {reportAllChanges: true});

    // Monitor LCP in real-time
  new PerformanceObserver((entryList) => {
    console.log(entryList.getEntries());
    
    for (const entry of entryList.getEntries()) {
      console.log('LCP:', entry.startTime, entry.name, entry.duration);
    }
  }).observe({entryTypes: ['largest-contentful-paint']});
  }
}
