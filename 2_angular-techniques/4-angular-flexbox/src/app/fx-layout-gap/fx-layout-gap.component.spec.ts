import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxLayoutGapComponent } from './fx-layout-gap.component';

describe('FxLayoutGapComponent', () => {
  let component: FxLayoutGapComponent;
  let fixture: ComponentFixture<FxLayoutGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxLayoutGapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxLayoutGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
