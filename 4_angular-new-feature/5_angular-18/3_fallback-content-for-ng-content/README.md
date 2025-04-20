# Fallback content for ng-content
In version 18, we can add default content for the ng-content so that the result of this default content is displayed even if no content is projected in the component.

Refer to the following code examples.

```ts
@Component({
  selector: ‘app-custom-widget’,
  template: `
    <ng-content select=".header">Default Header</ng-content>
    <ng-content>Default Content</ng-content>
  `,
})
export class CustomWidgetComponent {}
```

```html
<app-profile>
  <span class="header">New Header </span>
</app-profile>
```

In the above examples, the CustomWidgetComponent displays a default header if content with the class header is projected into it. If no content is projected, it shows the Default Content. This feature provides more flexibility in component usage and enhances user experience by ensuring that the relevant content is always displayed.