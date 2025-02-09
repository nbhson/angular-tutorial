import { ChildComponent } from './viewchild-dom-component/child/child.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './_shares/modules/material/material.module';
import { CardComponent } from './_shares/components/card/card.component';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewchildDomTemplateComponent } from './viewchild-dom-template/viewchild-dom-template.component';
import { ViewchildDomComponentComponent } from './viewchild-dom-component/viewchild-dom-component.component';
import { ViewchildMetadataComponent } from './viewchild-metadata/viewchild-metadata.component';
import { ColorComponent } from './viewchild-metadata/color/color.component';
import { ViewchildDirectivesComponent } from './viewchild-directives/viewchild-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SideNavComponent,
    ViewchildDomTemplateComponent,
    ViewchildDomComponentComponent,
    ChildComponent,
    ViewchildMetadataComponent,
    ColorComponent,
    ViewchildDirectivesComponent
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
