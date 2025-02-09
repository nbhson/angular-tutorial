# Day 2: ANGULAR DIRECTIVE

## Phần 1: Structure Directive

Structure directive là những directive có thể làm thay đổi cấu trúc. Cấu trúc này chính là DOM

### \*ngIf

Để hiển thị một phần view (template) theo một điều kiện, chúng ta sẽ gắn thêm một property đặc biệt vào một tag, với cú pháp có chứa dấu `* (asterisk)` như sau `*ngIf="expression"`:

```typescript
@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <div *ngIf="user.age >= 13">Bạn có thể xem nội dung PG-13</div>
  `,
})
export class HelloComponent {
  user = {
    name: "Son Nguyen",
    age: 30,
  };
}
```

Chỉ cần có thế là chúng ta có thể hiển thị view tùy thuộc vào dữ liệu mà expression trả về. Truthy thì hiển thị, Falsy thì không hiển thị.
Với những directive được cung cấp sẵn (built-in) bởi Angular, giờ đây HTML template của component sẽ rất flexible.
Vậy nếu chúng ta muốn dùng IF-ELSE thì thế nào. Có thể các bạn sẽ nghĩ ngay đến phủ định mệnh đề IF là được ELSE thôi. Điều này hoàn toàn được.

```html
<div *ngIf="user.age >= 13">Bạn có thể xem nội dung PG-13</div>
<div *ngIf="user.age < 13">Bạn không thể xem nội dung PG-13</div>
```

Hoặc chúng ta có cách hay ho khác, đó là dùng đến ng-template. Tag ng-template là một tag được cung cấp bởi Angular, nó sẽ lưu trữ một Template được định nghĩa bên trong cặp thẻ mở/đóng của nó. Những gì được định nghĩa bên trong đó sẽ không được hiển thị ra view, nhưng chúng ta có thể sử dụng Template đó để render bằng code. Đoạn code phía trên có thể được chuyển đổi tương đương:

```html
<div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
<ng-template #noPG13>
  <div>Bạn không thể xem nội dung PG-13</div>
</ng-template>
```

#### cấu trúc của \*ngIf với ng-template

Với cú pháp sử dụng dấu `*` ở trên, có thể các bạn sẽ thấy nó khác lạ, nhưng thực tế, nó được gọi là Syntactic sugar (giúp nhìn code dễ hiểu, dễ đọc hơn chẳng hạn) được chuyển đổi sang dạng property binding như sau:

```html
<ng-template [ngIf]="user.age >= 13" [ngIfElse]="noPG13">
  <div>Bạn có thể xem nội dung PG-13</div>
</ng-template>
```

### \*ngFor

```typescript
authors = [
  {
    id: 1,
    firstName: "Flora",
    lastName: "Twell",
    email: "ftwell0@phoca.cz",
    gender: "Female",
    ipAddress: "99.180.237.33",
  },
  {
    id: 2,
    firstName: "Priscella",
    lastName: "Signe",
    email: "psigne1@berkeley.edu",
    gender: "Female",
    ipAddress: "183.243.228.65",
  },
  // more data
];
```

Dưới đây là ví dụ về cách sử dụng \*ngFor:

```html
<div *ngFor="let author of authors">
  {{author.id}} - {{author.firstName}} {{author.lastName}}
</div>
```

#### Một số global variable được dùng trong \*ngFor

Khi sử dụng NgForOf, ở mỗi vòng lặp chúng ta sẽ có thể truy xuất đến một số local variable như:

| Term           | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| \$implicit: T  | Giá trị của phần tử trong danh sách ở lần lặp hiện tại (let author) |
| index: number  | index của lần lặp hiện tại                                          |
| count: number  | số lượng phần tử trong danh sách                                    |
| first: boolean | True nếu đây là phần tử đầu tiên trong danh sách                    |
| last: boolean  | True nếu đây là phần tử cuối cùng trong danh sách                   |
| even: boolean  | True nếu đây là phần tử ở index chẵn                                |
| odd: boolean   | True nếu đây là phần tử ở index lẻ                                  |

Để truy xuất được những biến trên chúng ta chỉ cần gọi chúng như sau:
Đối với \$implicit nó sẽ được gắn cho biến mà chính chúng ta khi khai báo let something of xxx, lúc này something = `\$implicit`.
Đối với các biến khác, chúng ta chỉ cần dùng cú pháp sau:

```html
<div *ngFor="let author of authors; index as idx; count as total">
  ({{idx}})/({{total}}): {{author.id}} - {{author.firstName}}
  {{author.lastName}}
</div>
```

Lúc này biến `idx = index`, và `total = count`. Tương tự đối với các biến còn lại.

#### Cấu trúc của \*ngFor với ng-template

Với cấu trúc dùng dấu sao (\*) như trên chúng ta có thể chuyển đổi tương ứng về dạng ng-template và property binding như sau:

```html
<ng-template
  ngFor
  [ngForOf]="authors"
  let-author
  let-idx="index"
  let-total="count"
>
  <div>
    ({{idx}})/({{total}}): {{author.id}} - {{author.firstName}}
    {{author.lastName}}
  </div>
</ng-template>
```

### Sử dụng nhiều structure trên cùng một element

Trong nhiều trường hợp, bạn có thể cần kiểm tra một dữ liệu nào đó trong vòng lặp, nếu bạn đặt ngIf và ngFor trên cùng một phần tử thì nó sẽ không work. Liệu có cách nào khác không?
Câu trả lời đó là bạn không thể đặt nhiều hơn một structure directive lên một phần tử được. Hãy thử xem ví dụ sau:

```typescript
for (let item of list) {
  if (somethingGood) {
    // more code
  }
}
```

Rõ ràng là chúng ta không đặt for và if vào cùng một hàng được. Vậy nên giải pháp lúc này là tách chúng ra, và sử dụng một tầng wrapper nữa.
Ví dụ:

```html
<div *ngFor="let item of list">
  <div *ngIf="somethingGoood">More code</div>
</div>
```

Giả sử nếu bạn không được phép hoặc không muốn sinh ra một div thừa thì sao? Chúng ta có thể convert NgIf về dạng ng-template như buổi trước hoặc dùng ng-container để dùng:

```html
<div *ngFor="let item of list">
  <ng-container *ngIf="somethingGoood"> More code </ng-container>
</div>
<div *ngFor="let item of list">
  <ng-template [ngIf]="somethingGoood"> More code </ng-template>
</div>
```

## Phần 2: Attribute directive

### Class binding

Trong các ứng dụng thực tế, có thể chúng ta cần thay đổi (thêm, xóa) một số class tùy thuộc vào một số điều kiện nào đó.
Ví dụ, nếu chúng ta đang chọn một tab nào đó để hiển thị, thì tab đó sẽ có thêm class tab-active, các tab khác sẽ không có. Lúc này chúng ta sẽ sử dụng cú pháp:

```html
<div [class.tab-active]="isTabActive" [class.tab-deactive]="isTabDeActive">some content</div>
```

Nhìn qua thì nó chỉ là property binding, với giá trị của isTabActive trả về true thì classList của div đó sẽ tồn tại class tab-active, còn nếu trả về false thì sẽ không tồn tại.
Ngoài cú pháp trên chúng ta có thể dùng:

```html
<div [class]="classExpr"></div>
```

Với classExpr có thể là string, array string hoặc object – nếu key nào của object là truthy thì sẽ thêm vào, nếu falsy thì sẽ xóa đi.
Ví dụ các dạng của classExpr:

| Type         | Value                                |
| ------------ | ------------------------------------ |
| String       | `"my-class-1 my-class-2 my-class-3"` |
| Array String | `['foo', 'bar']`                     |
| Object       | `{foo: true, bar: false}`            |

Tương tự với class binding chúng ta có thể sử dụng ngClass, nhưng hiện tại cũng có thể nói rằng ngClass không có gì khác biệt với [class]=”classExpr”. Và cách sử dụng Class Binding vẫn được khuyến cao sử dụng hơn ngClass

### Style binding

Có thể khi cần thiết, chúng ta cần binding cho style property (inline style), lúc này chúng ta có thể sử dụng Style binding.
Cấu trúc của style binding như sau:
[style.property]=”expression”
Với expression sẽ tính toán về các giá trị kiểu string | undefined | null
Ví dụ:

```html
<div [style.width]="someValue"></div>
```

Tiếp theo là cú pháp kèm theo unit: `[style.property.unit]=”expression”`

Với expression sẽ tính toán về các giá trị kiểu `number | undefined | null`
Ví dụ:
`[style.height.%]="containerHeight"`

Cuối cùng là cú pháp dạng:
`[style]="styleExpr"`

Với styleExpr là một trong các dạng:

| Type         | Value                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| String       | `"width: 100%; height: 100%"`                                                                           |
| Array String | `['width', '100px']`                                                                                    |
| Object       | <code>{[key: string]: string &#x7c; undefined &#x7c; null} như {width: '100px', height: '100px'}</code> |

Có một directive tương tự là ngStyle với cách dùng gấn giống thế, trong hầu hết các trường hợp, chúng ta được khuyến cáo sử dụng style binding thay thế.
Lưu ý rằng, một style property có thể dùng cả kiểu dash-key hoặc camelCase, ví dụ font-size hoặc fontSize đều được.
