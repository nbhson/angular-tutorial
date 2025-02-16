# Router unwraps default imports

To make the router simpler and reduce boilerplate further, the router now auto-unwraps default exports when lazy loading.

Let’s suppose you have the following LazyComponent:


```ts
@Component({
  standalone: true,
  template: '...'
})
export default class LazyComponent { ... }
```

Before this change, to lazy load a standalone component you had to:

```ts
{
  path: 'lazy',
  loadComponent: () => import('./lazy-file').then(m => m.LazyComponent),
}
```

Now the router will look for a default export and if it finds it, use it automatically, which simplifies the route declaration to:

```ts
{
  path: 'lazy',
  loadComponent: () => import('./lazy-file')
}
```