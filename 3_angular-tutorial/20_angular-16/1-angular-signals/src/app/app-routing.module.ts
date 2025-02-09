import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsInterpoperabilityComponent } from './rxjs-interpoperability/rxjs-interpoperability.component';

const routes: Routes = [
  { path: 'signal-type', loadChildren: () => import('./signal-types/signal-types.module').then(m => m.SignalTypesModule) },
  { path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule) },
  { path: 'rxjs-interpoperability', component: RxjsInterpoperabilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
