import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "hello",
  template: `
    <h1>Default component</h1>

    <button routerLink="/a/123" [queryParams]="{ k1: 'v1' }">
      go to a/123
    </button>
  `,
  styles: [
    `h1 { font-family: Lato;}`
  ],
  imports: [RouterModule],
})
export class DefaultComponent {}
