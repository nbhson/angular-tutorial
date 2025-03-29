# SSR And Hydration

> ng add @nguniversal/express-engine

## Why use SSR?

The main advantages of SSR as compared to client-side rendering (CSR) are:

- `Improved performance`: SSR can improve the performance of web applications by delivering fully rendered HTML to the client, which can be parsed and displayed even before the application JavaScript is downloaded. This can be especially beneficial for users on low-bandwidth connections or mobile devices.
- `Improved Core Web Vitals`: SSR results in performance improvements that can be measured using Core Web Vitals (CWV) statistics, such as reduced First Contentful Paint (FCP) and Largest Contentful Paint (LCP), as well as Cumulative Layout Shift (CLS).
- `Better SEO`: SSR can improve the search engine optimization (SEO) of web applications by making it easier for search engines to crawl and index the content of the application.

## Hydration?

Before angular 16, SSR has some significant drawbacks such as screen flickering and negatively impacts some Core Web Vitals such as LCP or CLS.

> Angular 16 adds support for non-destructive hydration. This approach is much better: the server renders the app, we get it on the screen, and then when the client app gets downloaded and bootstrapped, it reuses the DOM being already in place and enriches it with client-side capabilities, such as event listeners. 

```ts
bootstrapApplication(AppRootCmp, {
 providers: [provideClientHydration()]
});
```

There is also an option to skip hydration for some components (or rather component trees) if they’re not compatible with hydration (e.g. manipulating DOM directly with browser APIs). You can use either:

```html
<test-component ngSkipHydration />
```

or

```ts
@Component({
 ...
 host: {ngSkipHydration: 'true'},
})
class TestComponent {}
```

Hydration is the process that restores the server side rendered application on the client. This includes things like reusing the server rendered DOM structures, persisting the application state, transferring application data that was retrieved already by the server, and other processes.` Hydration is enabled by default when you use SSR`. You can find more info in the hydration guide <https://angular.io/guide/hydration>.

`Hydration` improves application performance by avoiding extra work to re-create DOM nodes. Instead, Angular tries to match existing DOM elements to the applications structure at runtime and reuses DOM nodes when possible. This results in a performance improvement that can be measured using Core Web Vitals (CWV) statistics, such as reducing the First-contentful paint FCP and Largest Contentful Paint (LCP), as well as Cumulative Layout Shift (CLS). Improving these numbers also affects things like SEO performance.

> In early tests we saw up to **45%** improvement of Largest Contentful Paint with full app hydration!

## Reference

<https://angular.dev/guide/ssr>

<https://angular.dev/guide/hydration>

Build: <https://www.angulararchitects.io/en/blog/guide-for-ssr/>

Step by step: <https://mobisoftinfotech.com/resources/blog/angular-19-ssr-guide-angular-universal-setup>