# Experimental view transitions support

The View Transitions API enables smooth transitions when changing the DOM. In the Angular router we now provide direct support for this API via the withViewTransitions feature. Using this, you can use the browser’s native capabilities for creating animated transitions between routes.

You can add this feature to your app today by configuring it in the router’s provider declaration during bootstrap:

```ts
bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withViewTransitions()),
  ]
});
```

withViewTransitions accepts an optional configuration object with a property onViewTransitionCreated, which is a callback that provides you some extra control:

Decide if you’d like to skip particular animations
Add classes to the document to customize the animation and remove these classes when the animation completes
etc.

## Example

<https://stackblitz.com/edit/stackblitz-starters-elyrjw?embed=1&file=src%2Fphoto-list.component.ts>

<https://blog.angular.dev/introducing-angular-v17-4d7033312e4b>

<https://developer.chrome.com/docs/web-platform/view-transitions/>