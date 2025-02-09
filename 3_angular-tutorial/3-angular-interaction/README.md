# DAY 3: ANGULAR INTERACTION

## Phần 1: @Input Decorator

Để thêm một property cho phép thiết lập progress hiện tại của thanh progress-bar, chúng ta có thể khai báo một property cho class và thêm một móc móc (decorator) như sau:

```typescript
export class ProgressBarComponent implements OnInit {
  @Input() progress = 0;
  constructor() {}
  ngOnInit() {}
}
```

Đơn giản thế là chúng ta đã có thể báo cho Angular biết rằng, chúng ta cần component này nhận vào một property tên là progress, và giá trị mặc định của nó bằng 0.

## Phần 2: ngOnInit vs constructor

Khi làm việc các bạn có thể thấy rằng Angular giới thiệu một số method gọi là life-cycle, chúng làm nhiệm vụ gì.

- Theo như lẽ thông thường, con người từ khi sinh ra đến khi chết đi sẽ đều trải qua một số sự kiện trọng đại trong đời, ví du: sinh ra, đầy tháng, sinh nhật hàng năm, kết hôn, chết đi. Tương tự như thế trong ứng dụng Angular sẽ có vòng đời cho các component. Angular được xây dựng xung quanh Component và Directive, ở một thời điểm có thể có 1 component được khởi tạo, một thời điểm khác chúng lại được xóa đi khỏi view, và có một số “sự kiện” khác cũng được xảy ra, do đó Angular cung cấp cho chúng ta một số method mà chúng ta chỉ việc khai báo cho component/directive, còn lại Angular sẽ tự call khi có những sự kiện tương ứng xảy ra.

Ở trong code phía trên, chúng ta được giới thiệu constructor và ngOnInit, vậy chúng giống và khác nhau gì?

- Constructor là hàm tạo của một class, nó là một function đặc biệt mà khi bạn khởi tạo một instance của class thì nó sẽ được tự động chạy, và chỉ chạy duy nhất một lần.
- ngOninit là một life-cycle method, nó sẽ được Angular tự động gọi khi component được khởi tạo, sau khi constructor chạy và sau khi các input đã được binding. Do đó nếu bạn binding cho một property ở template của component cha, thì ở constructor của component con bạn sẽ chưa nhận được giá trị mà bạn đã binding, nhưng ở ngOnInit thì bạn sẽ có thể nhận được.

* Quản lý chu kỳ đời sống (Lifecycle): Constructor được gọi khi một đối tượng mới được tạo ra, nhưng nó không được đảm bảo sẽ được gọi chỉ duy nhất một lần trong quá trình của một thành phần. Điều này có thể gây ra vấn đề nếu bạn cần thực hiện các tác vụ như gửi các yêu cầu HTTP, đăng ký các sự kiện, hoặc thực hiện các tác vụ đồng bộ khác. Thay vào đó, Angular cung cấp các hook chu kỳ đời sống (lifecycle hooks) như ngOnInit, ngAfterViewInit, và ngOnDestroy để bạn có thể thực hiện các tác vụ phù hợp vào thời điểm thích hợp trong chu kỳ đời sống của thành phần.

* Hiệu năng: Constructor của một thành phần được gọi mỗi khi một đối tượng mới được tạo ra, và việc thực hiện các tác vụ phức tạp trong constructor có thể ảnh hưởng đến hiệu năng của ứng dụng của bạn, đặc biệt là trong các thành phần có nhiều đối tượng được tạo ra đồng thời. Việc xử lý các tác vụ phức tạp trong constructor có thể làm gián đoạn quá trình khởi tạo và tạo ra trải nghiệm người dùng không tốt.

* Kiến thức về phụ thuộc: Constructor của một thành phần không nên chứa logic để giải quyết các phụ thuộc của nó, chẳng hạn như gọi các dịch vụ (services) hoặc injectors, vì điều này có thể gây phụ thuộc quá mức (over-injection) hoặc phụ thuộc không đúng cách. Thay vào đó, Angular cung cấp Dependency Injection (DI) để quản lý các phụ thuộc của một thành phần một cách rõ ràng và dễ dàng.

## Phần 3: Thay đổi giá trị của @Input ngOnChanges

Giả sử trong trường hợp nào đó mà chúng ta không biết người dùng binding những dữ liệu có hợp lệ không (điều này hoàn toàn có thể xảy ra như trường hợp người dùng truyền data kiểu any vào chẳng hạn), và chúng ta muốn validate Input thì có cách nào không?

Lúc này bạn sẽ dễ dàng validate lần đầu tiên ở trong ngOnInit được. Nhưng như thế ở các lần sau ngOnInit không chạy lại thì cũng không phải là giải pháp toàn diện. Đây chính là lúc mà bạn có thể sử dụng life-cycle tiếp theo là ngOnChanges.

ngOnChanges sẽ chạy lại mỗi khi có một input nào bị thay đổi, nó sẽ được tự động gọi bởi Angular, do đó chúng ta có thể validate property progress như sau:

```typescript
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() progress = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if ("progress" in changes) {
      if (typeof changes["progress"].currentValue !== "number") {
        const progress = Number(changes["progress"].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  ngOnInit() {}
}
```

Trong trường hợp bạn không thích dùng ngOnChanges, chúng ta có thể sử dụng getter/setter để làm điều này.

```typescript
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  private $progress = 0;
  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
    if (typeof value !== "number") {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }

  constructor() {}

  ngOnInit() {}
}
```

## Phần 4: @Output Decorator

```typescript
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
```

Đó là cách để chúng ta gửi đi một custom event cho component. Giờ đây ở parent component có thể listen vào event trên và tương tác được với nó.

```typescript
@Component({
  selector: "app-author-list",
  template: `<app-author-detail
    *ngFor="let author of authors"
    [author]="author"
    (deleteAuthor)="handleDelete($event)"
  >
  </app-author-detail>`,
  styles: [``],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() {}
  ngOnInit() {}
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
```
