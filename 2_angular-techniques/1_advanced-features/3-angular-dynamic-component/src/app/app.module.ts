import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AlertContentComponent } from './alert-content/alert-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertContainerComponent,
    AlertContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
