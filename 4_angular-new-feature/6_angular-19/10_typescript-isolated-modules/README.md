# Using isolatedModules in Angular

Angular now has support for TypeScript isolatedModules as of Angular 18.2. With this support in place, we’ve seen performance boosts of up to 10% in production build times.

We know that developers love performance improvements and in this blog post we’ll explain how you can take advantage of this feature in your projects.

## Background
When using the application builder in your Angular app and the TypeScript isolatedModules option is enabled and script sourcemaps are disabled, TypeScript code will be transpiled via the bundler instead of the current behavior of using TypeScript. The use of the isolatedModules option ensures that TypeScript code can be safely transpiled without the need for the type-checker.

## How it helps

Enabling this feature leads to several advantages. The bundler, esbuild in this case, now has knowledge of the TypeScript code constructs, such as enums, and can optimize the output code. It can inline both const and regular enums where possible. Additionally, this enables the removal of the Babel-based optimization passes for all TypeScript code. These passes are still present for all JavaScript code, for example code from third-party libraries/packages. These changes lead to an improvement in build time — especially in production configurations.

## How to set it up 

To enable this feature in your project, update your project’s TypeScript configuration file, typically tsconfig.json, to include "isolatedModules": true in the compilerOptions section:

```ts
"compilerOptions": {
    ...
    "isolatedModules": true
}
```

Note: to ensure optimal output code size in this setup, the useDefineForClassFields TypeScript option should either be removed or set to true which enables ECMAScript standard compliant behavior.

To learn more about the isolatedModules feature in TypeScript check out the documentation. Be sure to try out this update by running ng update and go build great apps.