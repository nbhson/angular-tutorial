import { ChangeDetectionStrategy, Component, EventEmitter, input, OnInit, output } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../model/model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: true,
  imports: [ProductComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit {

  categories = input.required<Array<Category>>();
  remove = output<string>();

  ngOnInit(): void {}

  onRemove(name: string): void {
    this.remove.emit(name);
  }

}
