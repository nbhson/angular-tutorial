# Functional router guards

Together with the tree-shakable standalone router APIs we worked on reducing boilerplate in guards. Let’s look at an example where we define a guard which verifies if the user is logged in:

```ts
@Injectable({ providedIn: 'root' })
export class MyGuardWithDependency implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isLoggedIn();
  }
}

const route = {
  path: 'somePath',
  canActivate: [MyGuardWithDependency]
};
```

LoginService implements most of the logic and in the guard we only invoke isLoggedIn(). Even though the guard is pretty simple, we have lots of boilerplate code.
With the new functional router guards, you can refactor this code down to:

```ts
const route = {
  path: 'admin',
  canActivate: [() => inject(LoginService).isLoggedIn()]
};
```