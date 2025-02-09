import { NgStyleComponent } from './attribute-directive/ng-style/ng-style.component';
import { NgClassComponent } from './attribute-directive/ng-class/ng-class.component';
import { NgSwitchComponent } from './structural-directive/ng-switch/ng-switch.component';
import { NgForComponent } from './structural-directive/ng-for/ng-for.component';
import { NgIfComponent } from './structural-directive/ng-if/ng-if.component';
import { MaterialModule } from './_shares/modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './_shares/components/card/card.component';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CardComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
