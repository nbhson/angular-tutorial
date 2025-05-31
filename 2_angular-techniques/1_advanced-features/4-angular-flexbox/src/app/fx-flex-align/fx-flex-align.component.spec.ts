import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFlexAlignComponent } from './fx-flex-align.component';

describe('FxFlexAlignComponent', () => {
  let component: FxFlexAlignComponent;
  let fixture: ComponentFixture<FxFlexAlignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxFlexAlignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxFlexAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
