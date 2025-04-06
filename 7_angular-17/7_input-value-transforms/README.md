# Input value transforms

A common pattern is having a component which receives a boolean input. This, however, sets constraints on how you can pass a value to such a component. For example if we have the following definition of an Expander component:

```ts
@Component({
  standalone: true,
  selector: 'my-expander',
  template: `…`
})
export class Expander {
  @Input() expanded: boolean = false;
}
```

…and we try to use it as:

```html
<my-expander expanded/>
```

You’ll get an error that “string is not assignable to boolean”. Input value transforms allow you to fix this by configuring the input decorator:

```ts
@Component({
  standalone: true,
  selector: 'my-expander',
  template: `…`
})
export class Expander {
  @Input({ transform: booleanAttribute }) expanded: boolean = false;
}
```

https://github.com/angular/angular/issues/14761