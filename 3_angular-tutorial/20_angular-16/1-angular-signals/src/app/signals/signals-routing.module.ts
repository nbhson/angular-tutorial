import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';
import { GetterChangesComponent } from './getter-changes/getter-changes.component';
import { SimpleSignalsComponent } from './simple-signals/simple-signals.component';
import { SignalMethodsComponent } from './signal-methods/signal-methods.component';
import { RxjsInteroperabilityComponent } from './rxjs-interoperability/rxjs-interoperability.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsComponent,
    children: [
      {
        path: 'getter-change',
        component: GetterChangesComponent,
      },
      {
        path: 'simple-signal',
        component: SimpleSignalsComponent,
      },
      {
        path: 'signal-methods',
        component: SignalMethodsComponent,
      },
      {
        path: 'rxjs-interoperability',
        component: RxjsInteroperabilityComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
