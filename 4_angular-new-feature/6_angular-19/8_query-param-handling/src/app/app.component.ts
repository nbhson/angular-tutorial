import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
    <router-outlet name="named-app-c"></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // const r = this.router.parseUrl('a/b/(foo/(name:gtj)//bar:beer//test:teeest)');
    // const r2 = this.router.parseUrl('a/b(foo//bar:beer//test:teeest)');
    // console.log(r);
    // console.log(this.router.serializeUrl(r));
    // console.log(r2);
    // console.log(this.router.serializeUrl(r2));
  }
}
