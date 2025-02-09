// MODULE
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../_shares/modules/material/material.module';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

// COMPONENT
import { CardComponent } from './../_shares/components/card/card.component';
import { ProductComponent } from '../product-management/components/product/product.component';
import { ProductDetailComponent } from '../product-management/components/product-detail/product-detail.component';
import { ProductListComponent } from '../product-management/components/product-list/product-list.component';
import { ProductEditComponent } from '../product-management/components/product-edit/product-edit.component';

// SERVICE

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [CardComponent]
})
export class ProductModule { }
