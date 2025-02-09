import { PipeCustomThreeComponent } from './pipe-custom-three/pipe-custom-three.component';
import { PipeCustomTwoComponent } from './pipe-custom-two/pipe-custom-two.component';
import { PipeCustomOneComponent } from './pipe-custom-one/pipe-custom-one.component';
import { PipeBasicComponent } from './pipe-basic/pipe-basic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeCustomFourComponent } from './pipe-custom-four/pipe-custom-four.component';

const routes: Routes = [
  {path: 'basic', component: PipeBasicComponent},
  {path: 'one', component: PipeCustomOneComponent},
  {path: 'two', component: PipeCustomTwoComponent},
  {path: 'three', component: PipeCustomThreeComponent},
  {path: 'four', component: PipeCustomFourComponent},
  {path: '**', component: PipeBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
