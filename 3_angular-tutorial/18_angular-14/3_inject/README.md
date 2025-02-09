# Inject

## Ví dụ 1

```ts
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: 'myToken',
      useValue: 'Token value'
    },
    {
      provide: 'myToken2',
      useFactory: (token: string) => {
        return `${token} is correct`
      },
      deps: ['myToken']
    }
  ]
})
export class AppComponent {
  title = '3_inject';

  constructor(
    @Inject('myToken') private myToken: string,
    @Inject('myToken2') private myToken2: string,
  ) {
    console.log(myToken);
    console.log(myToken2);
  }
}
```

## Ví dụ 2

```ts
import { Component, Inject, InjectionToken, inject } from '@angular/core';

const MY_TOKEN = new InjectionToken<string>('myToken');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MY_TOKEN,
      useValue: 'Token value'
    },
    {
      provide: 'myToken2',
      useFactory: () => {
        const token = inject(MY_TOKEN);
        return `${token} is correct`
      },
    }
  ]
})
export class AppComponent {
  title = '3_inject';

  constructor(
    // @Inject('myToken') private myToken: string, => error -> remove
    @Inject('myToken2') private myToken2: string,
  ) {
    console.log(myToken2);
  }
}
```


## Ví dụ 3

```ts
const MY_TOKEN = new InjectionToken<string>('myToken');

export class AppComponent {
  myToken2 = inject(MY_TOKEN)
  constructor( ) {
    console.log(myToken2);
  }
}
```