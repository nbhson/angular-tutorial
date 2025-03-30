import { ChangeDetectionStrategy, Component, computed, inject, input, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Product } from '../../model/model';
import { CategoryService } from '../../services/category.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe]
})
export class ProductComponent implements OnChanges {

  service = inject(CategoryService);

  products = input.required<Array<Product>>();

  ngOnChanges(): void {
    // console.log(this.service.state());
    // console.log(this.products());
  }
}
