import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFlexFillComponent } from './fx-flex-fill.component';

describe('FxFlexFillComponent', () => {
  let component: FxFlexFillComponent;
  let fixture: ComponentFixture<FxFlexFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxFlexFillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxFlexFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
