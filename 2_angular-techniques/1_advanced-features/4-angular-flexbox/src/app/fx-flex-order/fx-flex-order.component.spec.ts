import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFlexOrderComponent } from './fx-flex-order.component';

describe('FxFlexOrderComponent', () => {
  let component: FxFlexOrderComponent;
  let fixture: ComponentFixture<FxFlexOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxFlexOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxFlexOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
