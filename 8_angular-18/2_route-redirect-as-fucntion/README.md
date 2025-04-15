# Route redirects as functions

In Angular 18, a new feature allows dynamic route redirects based on runtime conditions. The redirectTo property accepts a function that returns a string, offering enhanced flexibility in redirect handling.

Refer to the following code example.

```ts
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    redirectTo: ({ queryParams }) => {
      const errorHandler = inject(ErrorHandler);
      const adminParam = queryParams['admin'];
      if (adminParam === 'true') {
        return `/admin/dashboard`;
      } else if (adminParam === 'false') {
        return `/user/dashboard`;
      } else {
        errorHandler.handleError(new Error(
          'Attempted navigation to dashboard without specifying admin status.'
        ));
        return `/not-found`;
      }
    },
  },
];
```

In this setup, the redirectTo function examines the query parameters to determine the appropriate destination route. If the admin parameter is true, the user is redirected to the admin dashboard; if it’s false, they are directed to the user dashboard. Any other scenario results in an error handling message and redirection to a not-found page.

This dynamic routing approach enhances user experience by adapting redirects based on runtime conditions, ensuring smooth navigation and graceful error handling.