import { ProductService } from './../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  subscription: Subscription;
  product: Product;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.handleParams();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleParams() {
    this.subscription = this._activatedRoute.parent.params.subscribe(
      (param) => {
        let id = parseInt(param.id)
        this.product = this._productService.getProductById(id);
      }
    );
  }
}
