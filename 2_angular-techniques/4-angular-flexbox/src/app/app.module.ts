import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FxLayoutComponent } from './fx-layout/fx-layout.component';
import { DemoComponent } from './demo/demo.component';
import { FxLayoutGapComponent } from './fx-layout-gap/fx-layout-gap.component';
import { FxLayoutAlignComponent } from './fx-layout-align/fx-layout-align.component';
import { FxFlexComponent } from './fx-flex/fx-flex.component';
import { FxFlexOrderComponent } from './fx-flex-order/fx-flex-order.component';
import { FxFlexAlignComponent } from './fx-flex-align/fx-flex-align.component';
import { FxFlexOffsetComponent } from './fx-flex-offset/fx-flex-offset.component';
import { FxFlexFillComponent } from './fx-flex-fill/fx-flex-fill.component';

@NgModule({
  declarations: [
    AppComponent,
    FxLayoutComponent,
    DemoComponent,
    FxLayoutGapComponent,
    FxLayoutAlignComponent,
    FxFlexComponent,
    FxFlexOrderComponent,
    FxFlexAlignComponent,
    FxFlexOffsetComponent,
    FxFlexFillComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
