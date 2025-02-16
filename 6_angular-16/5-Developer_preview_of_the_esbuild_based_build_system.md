# Developer preview of the esbuild-based build system

Over a year ago we announced that we’re working on experimental support for esbuild in the Angular CLI to make your builds faster. Today we’re excited to share that in v16 our esbuild-based build system enters developer preview! Early tests showed over `72% improvement in cold production builds.`

You can give Vite + esbuild a try by updating your angular.json:

```json 
"architect": {
  "build": {                     /* Add the esbuild suffix  */
    "builder": "@angular-devkit/build-angular:browser-esbuild",
  }
}
```