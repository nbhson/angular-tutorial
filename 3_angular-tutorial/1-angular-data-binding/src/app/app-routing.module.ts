import { ToWayBindingComponent } from './to-way-binding/to-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationBindingComponent },
  { path: 'property', component: PropertyBindingComponent },
  { path: 'attribute', component: AttributeBindingComponent },
  { path: 'class', component: ClassBindingComponent },
  { path: 'style', component: StyleBindingComponent },
  { path: 'event', component: EventBindingComponent },
  { path: 'to-way', component: ToWayBindingComponent },
  { path: '**', component: InterpolationBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
