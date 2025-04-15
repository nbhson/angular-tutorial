# Style and styleUrls as strings

Angular components support multiple stylesheets per component. However, the vast majority of cases when I want to style my components I create an array with a single element pointing to the inline styles or referencing an external stylesheet. A new feature enables you to switch from:

```ts
@Component({
  styles: [`
    ...
  `]
})
...
@Component({
  styleUrls: ['styles.css']
})
...
```
…to the simpler and more logical:

```ts
@Component({
  styles: `
    ...
  `
})
...
@Component({
  styleUrl: 'styles.css'
})
...
```

We still support multiple stylesheets when you use an array. This is more ergonomic, more intuitive, and plays better with automated formatting tools.