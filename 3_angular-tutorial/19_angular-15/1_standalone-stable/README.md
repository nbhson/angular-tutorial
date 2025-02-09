# Standalone APIs are now out of developer preview!

In v14 we introduced new standalone APIs which enable developers to build applications without using NgModules. We’re happy to share that these APIs graduated from developer preview and are now part of the stable API surface. From here on we will evolve them gradually following semantic versioning.

As part of making sure standalone APIs were ready to graduate we have ensured that standalone components work across Angular, and they now fully work in `HttpClient`, `Angular Elements`, `router` and **more**.

The standalone APIs allow you to bootstrap an application using a single component:

```TS
import {bootstrapApplication} from '@angular/platform-browser';
import {ImageGridComponent} from'./image-grid';

@Component({
  standalone: true,
  selector: 'photo-gallery',
  imports: [ImageGridComponent],
  template: `
    … <image-grid [images]="imageList"></image-grid>
  `,
})
export class PhotoGalleryComponent {
  // component logic
}

bootstrapApplication(PhotoGalleryComponent);
```

## Router and HttpClient tree-shakable standalone APIs

You can build a multi-route application using the new router standalone APIs! To declare the root route you can use the following:

```TS
export const appRoutes: Routes = [{
  path: 'lazy',
  loadChildren: () => import('./lazy/lazy.routes')
    .then(routes => routes.lazyRoutes)
}];
```

Where lazyRoutes are declared in:

```TS
import {Routes} from '@angular/router';

import {LazyComponent} from './lazy.component';

export const lazyRoutes: Routes = [{path: '', component: LazyComponent}];
```

and finally, register the appRoutes in the bootstrapApplication call:

```TS
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
});
```

> Another benefit of the provideRouter API is that it’s tree-shakable! Bundlers can remove unused features of the router at build-time. In our testing with the new API, we found that removing these unused features from the bundle resulted in an `11% reduction in the size of the router code` in the application bundle.