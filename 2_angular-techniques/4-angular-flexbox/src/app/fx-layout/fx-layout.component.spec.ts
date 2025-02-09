import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxLayoutComponent } from './fx-layout.component';

describe('FxLayoutComponent', () => {
  let component: FxLayoutComponent;
  let fixture: ComponentFixture<FxLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
