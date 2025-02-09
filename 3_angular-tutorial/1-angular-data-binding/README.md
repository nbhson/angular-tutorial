# DAY 1: ANGULAR DATA BINDING

- `Bind data`: ràng buộc dữ liệu vào cái gì đấy

- Một component trong Angular chỉ là một TypeScript (TS) class thông thường, và nó đi kèm với một decorator để gắn thêm meta-data như template (HTML) mà nó định nghĩa là gì.
- Câu hỏi đặt ra là làm thế nào để tôi hiển thị một dữ liệu nào đó tên, tuổi, ngày tháng năm sinh, một string, number bất kỳ, hay bất kỳ thứ gì (object) có thể hiển thị được?

> Chúng ta sẽ có một vài cách để 2 thành phần là ts và html có thể communicate với nhau

## Phần 1 - Interpolation binding

> Bind data từ ts -> html

Nó có thể hiểu là hãy tính toán cái `expression` bên trong dấu `{{}}` này, nếu có trả về cái gì thì display nó ra ngay vị trí chỗ dấu `{{}}`.

```typescript
import { Component } from "@angular/core";
@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
  `,
})
export class HelloComponent {
  user = {
    name: "Tiep Phan",
    age: 30,
  };
}
```

## Phần 2 - Attribute biding

> Bind data từ ts -> html

```html
<input type="text" [value]="user.name" />
```

Trong dự án Angular,bạn sẽ dùng dấu vuông vuông [property]="expression" để thực hiện khai báo property binding.

**Lưu ý**: ngoài property binding cho các phần tử HTML, chúng ta cũng có thể áp dụng property binding cho các component.

```html
<app-component [userInfo]="user" />
```

## Phần 3 - Event binding

> Bind data từ html -> ts

Để gắn event listener vào một phần tử nào đó ở trên template, chúng ta có thể sử dụng cú pháp ngoặc tròn tròn như sau:

```typescript
@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <button (click)="showInfo()">Click me!</button>
  `,
})
export class HelloComponent {
  showInfo() {
    alert("Inside Angular Component method");
  }
}
```

Chỉ là lúc này chúng ta sẽ trỏ đến method bên trong Component.

```html
<button onclick="showInfo()">Click me!</button>
```

## Phần 4 - Two-way binding

- Trong thực tế two-way binding chính là kết hợp của **binding dữ liệu từ class ra template thông qua property binding, và từ template vào class thông qua event binding.**
- Nó chứa cú pháp ngắn gọn dạng vuông vuông tròn tròn như sau:

```html
<input type="text" [(ngModel)]="user.name" />
```

Để sử dụng ngModel bạn cần imports FormsModule, nhưng trong bài này chúng ta chỉ cần hiểu, nó là cách viết tắt của dạng tương ứng là:

```html
<input type="text" [ngModel]="user.name" (ngModelChange)="user.name = $event" />
```
