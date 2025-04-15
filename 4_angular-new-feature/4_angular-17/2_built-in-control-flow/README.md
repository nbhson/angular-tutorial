# 2BuiltInControlFlow

## Conditional statements

Let’s look at a side by side comparison with *ngIf:

```html
@if (a > b) {
  <p>{{a}} is greater than {{b}}</p>
}
```

With the built-in if statement, this condition will look like:

```html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
```

The @if conditional supports saving the result of the conditional expression into a variable for reuse inside of the block.

```html
@if (user.profile.settings.startDate; as startDate) {
  {{ startDate }}
}
```

> Có thể cung cấp nội dung cho @else trực tiếp là một sự đơn giản hóa lớn so với mệnh đề else của giải pháp thay thế *ngIf cũ. 

The improved ergonomics is even more visible with *ngSwitch:

```html
<div [ngSwitch]="accessLevel">
  <admin-dashboard *ngSwitchCase="admin"/>
  <moderator-dashboard *ngSwitchCase="moderator"/>
  <user-dashboard *ngSwitchDefault/>
</div>
```

which with the built-in control flow turns into:

```html
@switch (accessLevel) {
  @case ('admin') { <admin-dashboard/> }
  @case ('moderator') { <moderator-dashboard/> }
  @default { <user-dashboard/> }
}
```

## Built-in for loop

Its basic syntax is:

```html
@for (item of items; track item.id) {
  {{ item.name }}
}
```

### Why is track in @for blocks important?

The track expression allows Angular to maintain a relationship between your data and the DOM nodes on the page. This allows Angular to optimize performance by executing the minimum necessary DOM operations when the data changes.

### Contextual variables in @for blocks


Variable	Meaning
$count	    Number of items in a collection iterated over
$index	    Index of the current row
$first	    Whether the current row is the first row
$last	    Whether the current row is the last row
$even	    Whether the current row index is even
$odd	    Whether the current row index is odd

```html
@for (item of items; track item.id; let idx = $index, e = $even) {
  <p>Item #{{ idx }}: {{ item.name }}</p>
}
```

### Providing a fallback for @for blocks with the @empty block

```html
@for (item of items; track item.name) {
  <li> {{ item.name }}</li>
} @empty {
  <li aria-hidden="true"> There are no items. </li>
}
```

## Reference

https://angular.dev/guide/templates/control-flow

https://blog.angular.dev/introducing-angular-v17-4d7033312e4b