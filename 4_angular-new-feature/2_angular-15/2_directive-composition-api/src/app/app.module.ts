import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TestDirectiveComponent } from './testdirective/testdirective.component';
import { FontWeightDirective } from './directive/font-weight.directive';
import { StyleDirective } from './directive/style.directive';

@NgModule({
  declarations: [	
    AppComponent, 
    TestDirectiveComponent, 
    StyleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
