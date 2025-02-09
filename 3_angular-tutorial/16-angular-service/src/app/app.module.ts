import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_shares/modules/material/material.module';
import { CardComponent } from './_shares/components/card/card.component';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { ComponentOneComponent } from './component/component-one/component-one.component';
import { ComponentTwoComponent } from './component/component-two/component-two.component';
import { ComponentParentComponent } from './component/component-parent/component-parent.component';
import { MoviesComponent } from './component/movies/movies.component';
import { FormMovieComponent } from './component/movies/form-movie/form-movie.component';
import { ListMovieComponent } from './component/movies/list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SideNavComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentParentComponent,
    MoviesComponent,
    FormMovieComponent,
    ListMovieComponent
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
