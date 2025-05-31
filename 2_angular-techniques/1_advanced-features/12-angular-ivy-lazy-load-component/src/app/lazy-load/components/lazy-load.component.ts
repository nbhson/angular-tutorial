import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLoadComponent implements OnDestroy, OnChanges {
  @Input() title!: string;
  @Output() loadMore: EventEmitter<null> = new EventEmitter<null>();

  destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}

// Lazy load trong angular ivy sẽ không phụ thuộc vào một module nào khác
// Nếu có phụ thuộc 3party thì phải có module
@NgModule({
  declarations: [LazyLoadComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})

class LazyLoadComponentModule {
}
