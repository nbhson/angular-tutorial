import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, signal, computed, effect, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

interface Post {
  id: number;
  title: string;
}
@Component({
  selector: 'app-simple-signals',
  templateUrl: './simple-signals.component.html',
  styleUrls: ['./simple-signals.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush // for example 5
})
export class SimpleSignalsComponent {
  // Example 1
  signalCount = signal(1);
  signalCountDepend = computed(() => {
    console.log('Detect Count Change #1');
    return this.signalCount() * 2
  });
  signalCountDepend2 = computed(() => {
    console.log('Detect Count Change #2');
    return this.signalCountDepend() * 3
  });

  // Example 2
  signalInput = signal('Default value');
  signalInputDepend = computed(() => {
    console.log('Detect Input Change');
    return this.signalInput() ? null : {required: 'Input is required'}
  });

  // Example 3
  signalObject = signal({name: 'Son', age: 25});
  signalObjectDepend = computed(() => {
    console.log('Detect Object Change');
    return this.signalObject();
  });

  // Example 4
  signalArray = signal<Array<Post>>([]);
  signalArrayDepend = computed(() => {
    console.log('Detect Array Change');
    return this.signalArray();
  });

  // Example 5
  // signalBoolean = signal<boolean>(false);
  signalBoolean = true; // cho ví dụ OnPush

  constructor(
    private cdf: ChangeDetectorRef
  ) { 
    effect(() => {
      console.log(Date.now(), this.signalInput(), this.signalCount());
    })
    // effect(() => {
    //   console.log(Date.now(), this.signalCount());
    // })
  }

  increment() {
    this.signalCount.set(this.signalCount() + 1);
  }

  decrement() {
    this.signalCount.set(this.signalCount() - 1);
  }

  onChange(event: Event) {
    const value = (event?.target as HTMLInputElement).value;
    this.signalInput.set(value + Date.now()); // không lấy
    this.signalInput.set(value); // lấy giá trị latest // the final result

    // Nhưng nếu để trong timeout thì nó sẽ set được 2 lần
    /**
     this.signalInput.set(value + Date.now()); // lấy
      setTimeout(() => {
        this.signalInput.set(value); // lấy luôn
      }, 0);
    */
  }

  changeObject() {
    // new value (phải tuân thủ theo type ban đầu)
    // this.signalObject.set({name: 'Son', age: 18});
    // new value (có thể tùy chỉnh bất kì field bên trong)
    // this.signalObject.mutate(v => v.age = 18);
    // new value (dựa trên thằng cũ/previous)
    this.signalObject.update(pre => {
      return { name: 'Son', age: 18 }
    });
  }

  addPost() {
    this.signalArray.set([...this.signalArray(), {id: 1, title: this.signalInput()}]);
  }

  updateBoolean() {
    // this.signalBoolean.update(previousValue => !previousValue);
    setTimeout(() => {
      this.signalBoolean = !this.signalBoolean;
      this.cdf.markForCheck();
    }, 500);
  }
}
