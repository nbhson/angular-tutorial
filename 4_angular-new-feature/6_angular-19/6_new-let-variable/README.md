# New template variable syntax @let

Angular introduced this @let syntax in 18.1, and made it stable in 19.0. This new feature simplifies the process of defining and reusing variables within templates. This addition addresses a significant community request by enabling developers to store results of expressions without the previous workarounds that were less ergonomic.

Here’s how you can utilize the @let syntax in your Angular templates:

```html
@let userName = 'Jane Doe';
<h1>Welcome, {{ userName }}</h1>


<input #userInput type="text">
@let greeting = 'Hello, ' + userInput.value;
<p>{{ greeting }}</p>


@let userData = userObservable$ | async;
<div>User details: {{ userData.name }}</div>
```

@let allows for defining variables directly in the template, which can then be reused throughout that template. Remember that variables defined with @let are read-only and scoped to the current template and its descendants—they cannot be reassigned or accessed from parent or sibling components. This scoped and immutable nature ensures that templates remain predictable and easier to debug.

