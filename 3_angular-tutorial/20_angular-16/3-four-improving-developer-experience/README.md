# Improving Developer Experience

## Required inputs

```ts
@Component(...)
export class App {
  @Input({ required: true }) title: string = '';
}
```

## Passing router data as component inputs

```ts
const routes = [
  {
    path: 'about',
    loadComponent: import('./about'),
    resolve: { contact: () => getContact() }
  }
];

@Component(...)
export class About {
  // The value of "contact" is passed to the contact input
  @Input() contact?: string;
}
```

## Flexible ngOnDestroy

```ts
import { Injectable, DestroyRef } from '@angular/core';

@Injectable(...)
export class AppService {
  destroyRef = inject(DestroyRef);

  destroy() {
    this.destroyRef.onDestroy(() => /* cleanup */ );
  }
}
```

## Self-closing tags

Now you can replace:

```html
<super-duper-long-component-name [prop]="someVar"></super-duper-long-component-name>
```

with this:

```html
<super-duper-long-component-name [prop]="someVar"/>
```