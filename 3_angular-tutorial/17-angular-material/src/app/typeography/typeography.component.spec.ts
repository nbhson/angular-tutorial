import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeographyComponent } from './typeography.component';

describe('TypeographyComponent', () => {
  let component: TypeographyComponent;
  let fixture: ComponentFixture<TypeographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
