import { FormsModule } from '@angular/forms';
import { MaterialModule } from './_shares/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
// MODULE
import { ProductModule } from './product-management/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

// COMPONENT
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';

// SERVICE
import { AccessGuard } from './guards/access.guard';
import { ProductService } from './product-management/services/product.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [ProductService, AuthGuard, AccessGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
