import { Product } from '../../models/product.class';
import { ProductService } from '../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productSubscription: Subscription;
  product: Product;

  constructor(
    private _routerService: Router,
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.handleSnapshot()
    this.handleParam();
    console.log(this.product);
  }
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
  // use snapshot
  handleSnapshot() {
    let id = parseInt(this._activatedRoute.snapshot.params.id);
    this.product = this._productService.getProductById(id);
  }
  // use param
  handleParam() {
    this.productSubscription = this._activatedRoute.params.subscribe((data) => {
      let id = parseInt(data.id);
      this.product = this._productService.getProductById(id);
    });
  }

  backToList() {
    this._routerService.navigate(['/products'])
  }

  edit() {
    this._routerService.navigate(['edit'], {
      relativeTo: this._activatedRoute.parent
    })
  }
}
