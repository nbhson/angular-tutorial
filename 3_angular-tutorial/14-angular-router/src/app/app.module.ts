import { ProductService } from './services/product.service';
import { AuthGuard } from './guards/auth.guard';
import { ProductComponent } from './components/products/product/product.component';
import { SideNavComponent } from './_shares/components/side-nav/side-nav.component';
import { CardComponent } from './_shares/components/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './_shares/modules/material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertComponent } from './components/alert/alert.component';
import { AccessGuard } from './guards/access.guard';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SideNavComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductEditComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    ProductService,
    AuthGuard,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
