import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-a',
  template: `
    <h1>A Comp</h1>

    <router-outlet></router-outlet>

    <button
      routerLink="b"
      [queryParams]="{ k2: 'v2' }"
      queryParamsHandling="merge"
    >
      go to b with queryParamsHandling='merge'
    </button>

    <br />

    <button [queryParams]="{ k2: 'v2' }" routerLink="b">
      go to b with queryParamsHandling='preserve'
    </button>

    <br />

    <button
      [queryParams]="{ k2: 'v2', k1: 'foo-value-refreshed' }"
      [routerLink]="[]"
    >
      go to this route (without reloading), but freshing the params
    </button>
    <br />

  `,
  styles: [],
  imports: [RouterOutlet, RouterModule],
})
export class aComponent {
  title = '7_query-param-handling';
}
