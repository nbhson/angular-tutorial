# Directive composition API

The directive composition API brings code reuse to another level! This feature was inspired by the most popular feature request on GitHub asking for the functionality to add directives to a host element.

The directive composition API enables developers to enhance host elements with directives and equips Angular with a powerful code reuse strategy, that’s only possible thanks to our compiler. The directive composition API only works with standalone directives.

```ts
@Component({
  selector: 'mat-menu',
  hostDirectives: [HasColor, {
    directive: CdkMenu,
    inputs: ['cdkMenuDisabled: disabled'],
    outputs: ['cdkMenuClosed: closed']
  }]
})
class MatMenu {}
```

In the code snippet above we enhance MatMenu with two directives: `HasColor` and `CdkMenu`. MatMenu reuses all the inputs, outputs, and associated logic with `HasColor` and only the logic and the selected inputs from `CdkMenu`.

> Kỹ thuật này có thể nhắc bạn về nhiều đặc điểm hoặc kế thừa trong một số ngôn ngữ lập trình, với điểm khác biệt là chúng tôi có cơ chế giải quyết xung đột tên và cơ chế này có thể áp dụng cho giao diện người dùng gốc.

Link: <https://www.telerik.com/blogs/use-powerful-directive-composition-api-angular-15-kendo-ui>

## Adding directives to a component

```TS
@Component({
  selector: 'admin-menu',
  template: 'admin-menu.html',
  hostDirectives: [MenuBehavior],
})
export class AdminMenu { }
```

## Including inputs and outputs

```TS
@Component({
  selector: 'admin-menu',
  template: 'admin-menu.html',
  hostDirectives: [{
    directive: MenuBehavior,
    inputs: ['menuId'],
    outputs: ['menuClosed'],
  }],
})
export class AdminMenu { }
```

```html
<admin-menu menuId="top-menu" (menuClosed)="logMenuClosed()">
```

```ts
@Component({
  selector: 'admin-menu',
  template: 'admin-menu.html',
  hostDirectives: [{
    directive: MenuBehavior,
    inputs: ['menuId: id'],
    outputs: ['menuClosed: closed'],
  }],
})
export class AdminMenu { }
```

```html
<admin-menu id="top-menu" (closed)="logMenuClosed()">
```

### Adding directives to another directive


```ts
@Directive({...})
export class Menu { }

@Directive({...})
export class Tooltip { }

// MenuWithTooltip can compose behaviors from multiple other directives
@Directive({
  hostDirectives: [Tooltip, Menu],
})
export class MenuWithTooltip { }

// CustomWidget can apply the already-composed behaviors from MenuWithTooltip
@Directive({
  hostDirectives: [MenuWithTooltip],
})
export class SpecializedMenuWithTooltip { }
```