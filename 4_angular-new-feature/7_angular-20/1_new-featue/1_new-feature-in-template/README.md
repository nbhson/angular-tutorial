# Hỗ trợ các tính năng mới trong templates

Angular 20 giới thiệu một số tính năng mới trong template compiler được thiết kế để nâng cao trải nghiệm developer và phù hợp với các biểu thức typescript. Mục tiêu cuối cùng là để tất cả các biểu thức template trong Angular hoạt động chính xác như các biểu thức TypeScript. Trong các phiên bản Angular tương lai, chúng ta có thể mong đợi hỗ trợ cho arrow functions và sự phù hợp đầy đủ với đặc tả optional-chaining – xem GitHub issue.

Dưới đây là những cập nhật đáng chú ý nhất được giới thiệu trong Angular 20: template string literals, toán tử lũy thừa, từ khóa in, và toán tử void. Hãy cùng tìm hiểu từng tính năng.

## Template Literals

Trước đây, việc nối chuỗi trong Angular templates có thể rất dài dòng. Bây giờ bạn có thể sử dụng template literals giống JavaScript một cách trực tiếp trong component templates.

Lưu ý rằng template literals trong Angular không hoạt động với inline-html được viết trong typescript template literal. Xem issue này để biết thêm thông tin.

### Untagged Template Literals:

```typescript
// user-avatar.ts 
@Component({
  selector: 'app-user-avatar',
  imports: [NgOptimizedImage],
  templateUrl: './user-avatar.html',
})
export class UserAvatar {
  readonly userId = input.required<string>();
}
```

```html
<!-- user-avatar.html -->
<img
  [ngSrc]="`https://i.pravatar.cc/150?u=${userId()}`"
  width="100"
  height="100"
/>
<p>{{ `User id: ${userId()}` }}</p>
```

### Tagged Template Literals:

```typescript
@Component({
  selector: 'app-user-details',
  template: '<p>{{ greet`Hello, ${name()}` }}</p>',
})
export class UserDetails {
  readonly name = input<string>('John');

  greet(strings: TemplateStringsArray, name: string) {
    return strings[0] + name + strings[1] + '!';
  }
}
```

Cách tiếp cận này làm cho các phép nội suy phức tạp trở nên dễ đọc và bảo trì hơn nhiều.

## Toán tử Lũy thừa

Angular 20 thêm hỗ trợ cho toán tử lũy thừa (**) trong templates, cho phép bạn tính lũy thừa của các số mà không cần viết custom pipes.

Ví dụ:

```typescript
@Component({
  template: '{{2 ** 3}}'
})
export class AppComponent {}
```

Template này sẽ render ra 8, vì 2 lũy thừa 3 bằng 8.

## Từ khóa In

Toán tử in cho phép bạn kiểm tra xem một object có chứa một thuộc tính cụ thể trước khi nội suy giá trị của nó hay không. Toán tử này hữu ích cho việc thu hẹp types hoặc hiển thị có điều kiện các thuộc tính trong components của bạn.

Ví dụ:

```typescript
// combat-logs.ts
@Component({
  selector: 'app-combat-logs',
  templateUrl: './combat-logs.html',
})
export class CombatLog {
  readonly attacks = [
    { magicDamage: 10 },
    { physicalDamage: 10 },
    { magicDamage: 10, physicalDamage: 10 },
  ];
}
```

```html
<!-- combat-logs.html -->
@for (attack of attacks; track attack) {
  @let hasMagicDamage = 'magicDamage' in attack;
  @if (hasMagicDamage) {
    <p>{{ `Dealt ${attack.magicDamage} points of magic damage.` }}</p>
  }
  @let hasPhysicalDamage = 'physicalDamage' in attack;
  @if (hasPhysicalDamage) {
    <p>{{ `Dealt ${attack.physicalDamage} points of physical damage.` }}</p>
  }
}
```

## Toán tử Void

Toán tử mới cuối cùng là void. Sử dụng nó để bỏ qua rõ ràng giá trị trả về của một bound listener, ngăn chặn việc gọi không mong muốn đến event.preventDefault() nếu handler của bạn trả về false.

Ví dụ:

```typescript
@Directive({
  host: { '(mousedown)': 'void handleMousedown()' },
})
export class MouseDownDirective {
  handleMousedown(): boolean {
    // Business logic...
    return false;
  }
}
```