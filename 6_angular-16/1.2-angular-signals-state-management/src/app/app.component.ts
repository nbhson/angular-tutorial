import { Component, computed, inject } from '@angular/core';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './components/category/category.component';

@Component({
  selector: 'app-root',
  imports: [CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '1.2-angular-signals-state-management';

  service = inject(CategoryService);

  // do computed đang observe state() nên cả 3 đều sẽ được trigger
  categories = computed(() => {
    console.log('computed categories');
    return this.service.state().data;
  });
  isLoading = computed(() => {
    console.log('computed isLoading');
    return this.service.state().loading;
  });
  error = computed(() => {
    console.log('computed error');
    return this.service.state().error
  });

  ngOnInit() {
    this.service.loadData();
  }

  onRemove(name: string) {
    this.service.removeItem(name);
  }

  onAdd() {
    this.service.addItem();
  }
}
