import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ItemsDirective } from './content-child/directives/items.directive';
import { ListComponent } from './content-child/list/list.component';
import { CardComponent } from './content-child/card/card.component';
import { TabsComponent } from './content-children/tabs/tabs.component';
import { TabComponent } from './content-children/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ItemsDirective,
    ListComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
