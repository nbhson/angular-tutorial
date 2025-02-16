# SSR And Hydration

> ng add @nguniversal/express-engine

## Why use SSR?

The main advantages of SSR as compared to client-side rendering (CSR) are:

- `Improved performance`: SSR can improve the performance of web applications by delivering fully rendered HTML to the client, which can be parsed and displayed even before the application JavaScript is downloaded. This can be especially beneficial for users on low-bandwidth connections or mobile devices.
- `Improved Core Web Vitals`: SSR results in performance improvements that can be measured using Core Web Vitals (CWV) statistics, such as reduced First Contentful Paint (FCP) and Largest Contentful Paint (LCP), as well as Cumulative Layout Shift (CLS).
- `Better SEO`: SSR can improve the search engine optimization (SEO) of web applications by making it easier for search engines to crawl and index the content of the application.

## Why use SSR?

Hydration is the process that restores the server side rendered application on the client. This includes things like reusing the server rendered DOM structures, persisting the application state, transferring application data that was retrieved already by the server, and other processes.` Hydration is enabled by default when you use SSR`. You can find more info in the hydration guide <https://angular.io/guide/hydration>.

`Hydration` improves application performance by avoiding extra work to re-create DOM nodes. Instead, Angular tries to match existing DOM elements to the applications structure at runtime and reuses DOM nodes when possible. This results in a performance improvement that can be measured using Core Web Vitals (CWV) statistics, such as reducing the First-contentful paint FCP and Largest Contentful Paint (LCP), as well as Cumulative Layout Shift (CLS). Improving these numbers also affects things like SEO performance.

> In early tests we saw up to **45%** improvement of Largest Contentful Paint with full app hydration!