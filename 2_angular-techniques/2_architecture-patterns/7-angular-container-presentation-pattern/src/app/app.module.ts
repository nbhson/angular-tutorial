import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataApi } from 'src/api/data.api';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { UsersComponent } from './users/users.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
      UsersComponent,
      UserTileComponent,
      UserFormComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    DataApi,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
