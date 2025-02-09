import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadiobuttonComponent } from './checkbox-radiobutton.component';

describe('CheckboxRadiobuttonComponent', () => {
  let component: CheckboxRadiobuttonComponent;
  let fixture: ComponentFixture<CheckboxRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxRadiobuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
