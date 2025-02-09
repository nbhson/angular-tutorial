import { Component, Inject, inject } from '@angular/core';
import { MY_TOKEN } from './constant.const';

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
  token = inject(MY_TOKEN); // work

  constructor(
    @Inject('myToken2') private myToken2: string,
  ) {
    console.log(this.token); 
    console.log(myToken2);
  }

  ngOnInit(): void {
    // const token = inject(MY_TOKEN); // NOT work
    // console.log(token); // ERROR
  }
}
