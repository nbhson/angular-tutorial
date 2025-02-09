import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './_shares/modules/material/material.module';
import { CardComponent } from './_shares/components/card/card.component';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeBasicComponent } from './pipe-basic/pipe-basic.component';
import { PipeCustomOneComponent } from './pipe-custom-one/pipe-custom-one.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { PipeCustomTwoComponent } from './pipe-custom-two/pipe-custom-two.component';
import { FormsModule } from '@angular/forms';
import { PipeCustomThreeComponent } from './pipe-custom-three/pipe-custom-three.component';
import { SortArrayPipe } from './pipes/sort-array.pipe';
import { FilterStringPipe } from './pipes/filter-string.pipe';
import { PipeCustomFourComponent } from './pipe-custom-four/pipe-custom-four.component';
import { SortStringPipe } from './pipes/sort-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CardComponent,
    PipeBasicComponent,
    PipeCustomOneComponent,
    FormatDataPipe,
    PipeCustomTwoComponent,
    PipeCustomThreeComponent,
    SortArrayPipe,
    FilterStringPipe,
    PipeCustomFourComponent,
    SortStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
