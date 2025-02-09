import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFlexOffsetComponent } from './fx-flex-offset.component';

describe('FxFlexOffsetComponent', () => {
  let component: FxFlexOffsetComponent;
  let fixture: ComponentFixture<FxFlexOffsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxFlexOffsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxFlexOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
