import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FxFlexAlignComponent } from './fx-flex-align/fx-flex-align.component';
import { FxFlexFillComponent } from './fx-flex-fill/fx-flex-fill.component';
import { FxFlexOffsetComponent } from './fx-flex-offset/fx-flex-offset.component';
import { FxFlexOrderComponent } from './fx-flex-order/fx-flex-order.component';
import { FxFlexComponent } from './fx-flex/fx-flex.component';
import { FxLayoutAlignComponent } from './fx-layout-align/fx-layout-align.component';
import { FxLayoutGapComponent } from './fx-layout-gap/fx-layout-gap.component';
import { FxLayoutComponent } from './fx-layout/fx-layout.component';

const routes: Routes = [
  {path: '', component: DemoComponent},
  {path: 'fx-layout', component: FxLayoutComponent},
  {path: 'fx-layout-gap', component: FxLayoutGapComponent},
  {path: 'fx-layout-align', component: FxLayoutAlignComponent},
  {path: 'fx-flex', component: FxFlexComponent},
  {path: 'fx-flex-order', component: FxFlexOrderComponent},
  {path: 'fx-flex-offset', component: FxFlexOffsetComponent},
  {path: 'fx-flex-align', component: FxFlexAlignComponent},
  {path: 'fx-flex-fill', component: FxFlexFillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
