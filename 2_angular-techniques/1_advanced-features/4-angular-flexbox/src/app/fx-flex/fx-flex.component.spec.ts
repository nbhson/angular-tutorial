import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFlexComponent } from './fx-flex.component';

describe('FxFlexComponent', () => {
  let component: FxFlexComponent;
  let fixture: ComponentFixture<FxFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
