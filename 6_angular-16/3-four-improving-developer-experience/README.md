# Improving Developer Experience

## Required inputs

The new feature fills this gap and allows us to explicitly mark the input as required, either in the @Input decorator:

```ts
@Component(...)
export class App {
  @Input({ required: true }) title: string = '';
}
```

or the @Component decorator inputs array:

```ts
@Component({
 ...
 inputs: [
   {name: 'title', required: true}
 ]
})
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

The list below shows the precedence of data being bound to input property if the names are the same:

- resolved route data
- static data
- optional/matrix params
- path params
- query params

@Component(...)
export class About {
  // The value of "contact" is passed to the contact input
  @Input() contact?: string;
}
```

<https://angular.love/router-data-as-components-inputs-in-angular-v16>

## Developer preview of the esbuild-based build system

Over a year ago we announced that we’re working on experimental support for esbuild in the Angular CLI to make your builds faster. Today we’re excited to share that in v16 our esbuild-based build system enters developer preview! Early tests showed over `72% improvement in cold production builds.`

You can give Vite + esbuild a try by updating your angular.json:

```json 
"architect": {
  "build": {                     /* Add the esbuild suffix  */
    "builder": "@angular-devkit/build-angular:browser-esbuild",
  }
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

## Better unit testing with Jest and Web Test Runner

Based on developer surveys in the Angular and the broader JavaScript community, Jest is one of the most loved testing frameworks and test runners. We’ve received numerous requests to support Jest which comes with reduced complexity since no real browsers are required.

Today, we’re happy to announce that we’re introducing experimental Jest support. In a future release we will also move existing Karma projects to Web Test Runner to continue supporting browser-based unit testing. This will be a no-op for the majority of developers.

You can experiment with Jest in new projects by installing Jest with npm install jest --save-dev and updating your angular.json file:

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "test": {
          "builder": "@angular-devkit/build-angular:jest",
          "options": {
            "tsConfig": "tsconfig.spec.json",
            "polyfills": ["zone.js", "zone.js/testing"]
          }
        }
      }
    }
  }
}
```

## CSP support for inline-styles

Content Security Policy (CSP) is a defense-in-depth technique to prevent XSS. To enable CSP, configure your web server to return an appropriate Content-Security-Policy HTTP header.

In Angular v16, we’ve implemented a new feature spanning the framework, Universal, CDK, Material, and the CLI which allows you to specify a nonce attribute for the styles of the components that Angular inlines. There are two ways to specify the nonce: using the ngCspNonce attribute or through the CSP_NONCE injection token.

```html
<html>
<body>
  <app ngCspNonce="{% nonce %}"></app>  
</body>
</html>
```

```ts
import {bootstrapApplication, CSP_NONCE} from '@angular/core';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [{
    provide: CSP_NONCE,
    useValue: globalThis.myRandomNonceValue
  }]
});
```

<https://v17.angular.io/guide/security#content-security-policy>

## Configure Zone.js

After the initial release of the standalone APIs we heard from developers that you’d like to be able to configure `Zone.js` with the new bootstrapApplication API.

We added an option for this via provideZoneChangeDetection:

```ts
bootstrapApplication(App, {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })]
});
```

## Reference

<https://blog.angular.dev/angular-v16-is-here-4d7a28ec680d>

<https://angular.love/angular-16-whats-new#esbuild%20dev%20server>
