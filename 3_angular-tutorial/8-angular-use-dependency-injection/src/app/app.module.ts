import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    /** Cách 1 */
    AppService, // sort-hand

    /** Cách 2 */
    // { 
    //   provide: AppService,
    //   useClass: AppService
    // },

    /** Cách 3 */
    // {
    //   provide: 'app-service',
    //   useClass: AppService
    // }

    /** Multi */
    // {
    //   provide: 'app-service',
    //   useClass: AppService,
    //   multi: true
    // },
    // {
    //   provide: 'app-service',
    //   useClass: AppService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
