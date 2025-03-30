import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { LocalComponent } from './local/local.component';
import { StateBasedComponent } from './state-based/state-based.component';
import { SignalTypesComponent } from './signal-types.component';

const routes: Routes = [
  {
    path: '',
    component: SignalTypesComponent,
    children: [
      { path: 'broadcast', component: BroadcastComponent },
      { path: 'local', component: LocalComponent },
      { path: 'state-based', component: StateBasedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalTypeRoutingModule {}
