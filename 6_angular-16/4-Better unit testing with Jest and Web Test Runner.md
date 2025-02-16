# Better unit testing with Jest and Web Test Runner

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