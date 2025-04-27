# New equality function in rxjs-interop

Chức năng toSignal Angular đã được tăng cường để hỗ trợ chức năng bình đẳng tùy chỉnh, cung cấp cho các nhà phát triển kiểm soát nhiều hơn về cách so sánh giá trị Cập nhật kích hoạt.

Trước đây, toSignal hoạt động với kiểm tra bình đẳng cơ bản, thiếu tính linh hoạt cho các nhà phát triển để xác định những gì cấu thành sự bình đẳng cho các kịch bản cụ thể của họ. Điều này thường dẫn đến các bản cập nhật thành phần không cần thiết.

Với bản cập nhật gần đây, các nhà phát triển hiện có thể chỉ định chức năng bình đẳng tùy chỉnh xác định khi nào các bản cập nhật sẽ xảy ra, tối ưu hóa hiệu suất bằng cách đảm bảo rằng các bản cập nhật chỉ được kích hoạt bởi các thay đổi dữ liệu có ý nghĩa. 

Tính năng mới này không chỉ cho phép so sánh giá trị phù hợp mà còn tiêu chuẩn hóa việc sử dụng kiểm tra bình đẳng khi trước đây vắng mặt, làm cho hành vi của tín hiệu dễ dự đoán và hiệu quả hơn.


```ts
// Create a Subject to emit array values
const arraySubject$ = new Subject<number[]>();


// Define a custom equality function to compare arrays based on their content
const arraysAreEqual = (a: number[], b: number[]): boolean => {
   return a.length === b.length && a.every((value, index) => value === b[index]);
};

// Convert the Subject to a signal with a custom equality function
const arraySignal = toSignal(arraySubject$, {
   initialValue: [1, 2, 3],
   equals: arraysAreEqual, // Custom equality function for arrays
});
```

Result:

```ts
// Phát ra giá trị mới
arraySubject$.next([1, 2, 3]); // Không trigger update vì giống giá trị ban đầu
arraySubject$.next([1, 2, 4]); // Trigger update vì mảng đã thay đổi

// Đọc giá trị từ signal
console.log(arraySignal()); // [1, 2, 4]
```

Example:

```ts
import { Component, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-example',
  template: `
    <p>Array: {{ array() | json }}</p>
  `,
})
export class ExampleComponent {
  arraySubject$ = new Subject<number[]>();
  arraysAreEqual = (a: number[], b: number[]): boolean => {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  };

  array = toSignal(this.arraySubject$, { equal: this.arraysAreEqual });

  constructor() {
    this.arraySubject$.next([1, 2, 3]); 
    this.arraySubject$.next([1, 2, 3]); // No update, arrays are equal
    this.arraySubject$.next([1, 2, 4]); // Update, arrays are different
  }
}
```