import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_shares/modules/material/material.module';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { CardComponent } from './_shares/components/card/card.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ToWayBindingComponent } from './to-way-binding/to-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CardComponent,
    ClassBindingComponent,
    PropertyBindingComponent,
    InterpolationBindingComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    ToWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
