import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxLayoutAlignComponent } from './fx-layout-align.component';

describe('FxLayoutAlignComponent', () => {
  let component: FxLayoutAlignComponent;
  let fixture: ComponentFixture<FxLayoutAlignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxLayoutAlignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxLayoutAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
