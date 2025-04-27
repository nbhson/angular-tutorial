import { JsonPipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [JsonPipe]
})
export class AppComponent implements OnInit {

  arraySubject$ = new Subject<number[]>();
  number = signal<number>(1);
  
  // Define a custom equality function to compare arrays based on their content
  arraysAreEqual = (a: number[], b: number[]): boolean => {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  };

  array = toSignal(this.arraySubject$, { 
    initialValue: [1,2,3], 
    equal: this.arraysAreEqual 
  });

  checkComputed = computed(() => {
    console.log('trigger computed');
    console.log(this.number());
    console.log(this.array());
    
    return this.array();
  })

  ngOnInit() {
    this.arraySubject$.next([1, 2, 3]); 
    this.arraySubject$.next([1, 2, 3]); // No update, arrays are equal
    this.arraySubject$.next([1, 2, 4]); // Update, arrays are different


    setTimeout(() => {
      this.number.set(2);
    }, 3000);
    
  }
}
