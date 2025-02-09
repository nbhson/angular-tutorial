import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './_shares/modules/material/material.module';
import { CardComponent } from './_shares/components/card/card.component';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOnInitNgOnDestroyComponent } from './ng-on-init-ng-on-destroy/ng-on-init-ng-on-destroy.component';
import { NgOnChangesNgDoCheckComponent } from './ng-on-changes-ng-do-check/ng-on-changes-ng-do-check.component';
import { ChildComponent } from './ng-on-changes-ng-do-check/child/child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ChildComponentNgContent } from './ng-content/child/child.component';
import { NgAfterContentInitNgAfterContentCheckedComponent } from './ng-after-content-init-ng-after-content-checked/ng-after-content-init-ng-after-content-checked.component';
import { ChildNgAfterInitComponent } from './ng-after-content-init-ng-after-content-checked/child-ng-after-init/child-ng-after-init.component';
import { NgAfterViewNgAfterViewCheckedComponent } from './ng-after-view-ng-after-view-checked/ng-after-view-ng-after-view-checked.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CardComponent,
    NgOnInitNgOnDestroyComponent,
    NgOnChangesNgDoCheckComponent,
    ChildComponent,
    NgContentComponent,
    ChildComponentNgContent,
    NgAfterContentInitNgAfterContentCheckedComponent,
    ChildNgAfterInitComponent,
    NgAfterViewNgAfterViewCheckedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
