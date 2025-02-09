import { NgStyleComponent } from './attribute-directive/ng-style/ng-style.component';
import { NgClassComponent } from './attribute-directive/ng-class/ng-class.component';
import { NgSwitchComponent } from './structural-directive/ng-switch/ng-switch.component';
import { NgForComponent } from './structural-directive/ng-for/ng-for.component';
import { NgIfComponent } from './structural-directive/ng-if/ng-if.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'ng-if', component: NgIfComponent},
  {path: 'ng-for', component: NgForComponent},
  {path: 'ng-switch', component: NgSwitchComponent},
  {path: 'ng-class', component: NgClassComponent},
  {path: 'ng-style', component: NgStyleComponent},
  {path: '**', component: NgIfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
