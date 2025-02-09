
import { AuthGuard } from '../guards/auth.guard';
import { ProductEditComponent } from '../product-management/components/product-edit/product-edit.component';
import { ProductComponent } from '../product-management/components/product/product.component';
import { ProductDetailComponent } from '../product-management/components/product-detail/product-detail.component';
import { ProductListComponent } from '../product-management/components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductDetailComponent },
      { path: 'edit', component: ProductEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
