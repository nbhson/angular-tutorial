import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.class';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  queryParamsSubscription: Subscription;
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['id', 'name', 'price', 'status', 'goto'];

  id;
  name;

  constructor(
    private _productService: ProductService,
    private _routerService: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource<Product>([]);
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this._activatedRoute.queryParams.subscribe(
      (data) => {
        let id = parseInt(data.id);
        let name = data.name;
        // khi F5 vẫn giữ giá trị và binding lên trên
        this.id = id ? id : '';
        this.name = name ? name : '';
        this.getAllProducts(id, name);
      }
    );
  }

  getAllProducts(id: number, name: string) {
    this.dataSource.data = this._productService.getAllProducts(id, name);
  }

  search() {
    this._routerService.navigate(['/products'], {
      queryParams: {
        id: this.id ? this.id : '',
        name: this.name ? this.name : '',
      },
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
