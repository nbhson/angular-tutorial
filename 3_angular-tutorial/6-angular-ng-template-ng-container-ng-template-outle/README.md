# Day 6:  ng-template & ng-container

Khi dùng `*ngIf` với điều kiện else, chúng ta có thể truyền vào một template reference đc định nghĩa thông qua cú pháp `#templateReferenceName` để render lên UI.

```html
<div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
<ng-template #noPG13>
  <div>Bạn không thể xem nội dung PG-13</div>
</ng-template>
```

> Có thể định nghĩa ng-template là một thành phần của Angular để render HTML code. Và phần HTML code nằm trong ng-template không bao giờ được hiển thị trực tiếp ở nơi nó được định nghĩa

## Khi nào dùng ng-template?

1. Dùng kết hợp với các Structure Directive của Angular, ví dụ như *ngIf
2. Khi một số UI element trong một component bị lặp lại trong chính component đó, nhưng phần code đó quá nhỏ để tách ra làm một component riêng.

Đây là cách bình thường chúng ta hay làm. Copy and paste code.

```html
<div class="card">
  <div class="card-header">
    You have selected
    <span class="badge badge-primary">{{ counter }}</span> items.
  </div>
  <div class="card-body">
    There are <span class="badge badge-primary">{{ counter }}</span> items was
    selected.
  </div>
  <div class="card-footer">
    You have selected
    <span class="badge badge-primary">{{ counter }}</span> items.
  </div>
</div>
```

Và đây là cách chúng ta có thể viết lại bằng cách dùng `ng-template` và `ngTemplateOutlet`.

```html
<div class="card">
  <div class="card-header">
    You have selected
    <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container>.
  </div>
  <div class="card-body">
    There are <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container> was
    selected.
  </div>
  <div class="card-footer">
    You have selected
    <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container>.
  </div>
</div>

<ng-template #counterTmpl>
  <span class="badge badge-primary">{{ counter }}</span> items
</ng-template>
```

Khi viết lại code dùng `ng-template`, ưu điểm dễ nhận thấy đó là:

- Nếu cần sửa lại UI cho counter. Thay vì phải sửa ở 3 nơi, bây giờ ta chỉ cần sửa ở một vị trí đó là `ng-template` của counter thôi. Tránh những lỗi typo hay find and replace bị thiếu.
- Vì phần template này chỉ gói gọn trong đúng một dòng code nên dùng ng-template tiện hơn hẳn là phải tách phần counter ra một component mới.

3. Dùng ng-template để pass vào component khác. Hỗ trợ override template có sẵn trong component.

## ng-container

ng-container là một custom html tag để khi render trên UI sẽ không có extra tag để tránh ảnh hưởng đến style mình viết. Như ở ví dụ trên, bạn hoàn toàn có thể viết lại thành.

```html
<div
  [ngTemplateOutlet]="buttonTmpl"
  [ngTemplateOutletContext]="{ label: 'Click here', class: 'btn-primary', icon: null }"
></div>
```

Tuy nhiên khi render ra UI, sẽ bị thừa một thẻ div bao ngoài.

```html
<div>
  <button class="btn btn-primary">Click here</button>
</div>
```

## ngTemplateOutlet

Qua ví dụ trên thì có thể thấy ngay `ngTemplateOutlet` là cách dùng để render một template được tạo ra bởi `ng-template` lên UI. Cú pháp như sau

- *ngTemplateOutlet="templateRef" (chú ý dấu sao * nhé, không có là không chạy đâu đấy)
- [ngTemplateOutlet]="templateRef"

> Tuy nhiên, như component có @Input() để truyền data từ bên ngoài vào, thì ng-template cũng có cú pháp tương tự để truyền data. Đó chính là `ngTemplateOutletContext`
