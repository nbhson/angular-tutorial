# Day 4: Template Variable (ViewChild)

## Template variable?

```html
<input matInput #demoInput autocomplete="off" />
```

- #demoInput: chính là Template variable (dấu #)
- #demoInput: cũng chính là instance của cái input này
- Khi sử dụng @ViewChild thì Angular sẽ tham chiếu biến mà chúng ta định nghĩa tới element cụ thể

## Multiple Child

```html
<input matInput #demoInput autocomplete="off" />
<input matInput #demoInput autocomplete="off" />
<input matInput #demoInput autocomplete="off" />
```

```ts
@ViewChildren(demoInput) demoInput: QueryList<demoInput>;

ngAfterViewInit() {
  this.demoInput.changes.subscribe(console.log)
}
```

- Lúc này chúng ta sẽ có 1 list item input bên trong, và có thể bắt được sự thay đổi thông qua method changes
- Nếu chúng ta đặt bắt kì một child nào bên trong structure thì nó sẽ không hoạt động


## Template variable hoạt động khi nào?

Nếu selector không nằm trong một structure directive nào thì chúng ta có thể gọi nó là static: true, tức là nó không thay đổi trong suốt thời gian sống của component. Lúc này Angular (v9 trở lên) sẽ chạy phần resolve query result (tiến trình) trước khi chạy Change Detection nên chúng ta có thể truy cập nó ở trong ngOnInit.

Nếu static: false (giá trị mặc định) thì tiến trình trên sẽ chạy sau khi chạy Change Detection nên bạn không thể dùng nó ở ngOnInit mà phải chạy ở ngAfterViewInit.

> Và chúng ta chỉ có thể dùng `static: true` nếu element đó không nằm trong bất kỳ structure directive nào như *ngIf *ngFor...

## Options

Chúng ta có thể tham chiếu tới cùng một input nhưng có thể đọc được nhiều giá trị khác nhau

- {read: ElementRef}
- {read: ViewContainerRef}
