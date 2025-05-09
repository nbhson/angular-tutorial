# Initializer provider functions
Angular v19 has introduced new helper functions:

- provideAppInitializer, 
- provideEnvironmentInitializer,
- providePlatformInitializer

to simplify the initializer setup process and provide a cleaner alternative to the traditional APP_INITIALIZER, ENVIRONMENT_INITIALIZER, and PLATFORM_INITIALIZER tokens. These functions act as syntactic sugar, allowing developers to configure application, environment, and platform-level initializers in a more readable and straightforward way. 

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      console.log('app initialized');
    })
  ]
};
```

Additionally, Angular v19 includes a migration tool to help transition existing initializers to this new format, making it easier to adopt the updated approach without manually refactoring code. 