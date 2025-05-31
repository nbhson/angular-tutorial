import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { ViewContainerComponent } from './view-container/view-container.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, ViewContainerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
