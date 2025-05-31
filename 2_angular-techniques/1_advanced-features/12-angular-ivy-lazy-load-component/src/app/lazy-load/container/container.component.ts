import { ChangeDetectionStrategy, Component, Injector, OnInit, SimpleChange, ViewChild, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { LazyLoadService } from '../services/lazy-load.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  // ViewContainerRef: tạo component và bỏ vào đó
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private readonly lazyLoadService: LazyLoadService,
  ) {}

  ngOnInit(): void {
  }
  
  async onLoad() {
    // load ComponentFactory
    const compFactory = await this.lazyLoadService.load();

    // Optional: load title @Input
    const title = this.lazyLoadService.getCounter();

    // Create component from ComponentFactory (instance of LazyloadComponent)
    const { instance } = this.container.createComponent(compFactory);
    
    // Assign Input
    instance.title = title;

    // Listen to Output
    instance.loadMore.pipe(takeUntil(instance.destroy$)).subscribe(() => this.onLoad());

    // Trigger first ngOnChanges manually
    instance.ngOnChanges({
      title: new SimpleChange(null, title, true)
    });
  }
}
