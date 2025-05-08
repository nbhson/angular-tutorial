import { Routes } from '@angular/router';
import { DefaultComponent } from './components/default.component';
import { aComponent } from './components/a.component';
import { bComponent } from './components/b.component';

export const routes: Routes = [
  {
    path: "",
    component: DefaultComponent
  },
  {
    path: "a/:id",
    component: aComponent,
    children: [{ path: "b", component: bComponent }]
  }
];
