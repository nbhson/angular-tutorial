import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlidenavComponent } from './mat-slidenav.component';

describe('MatSlidenavComponent', () => {
  let component: MatSlidenavComponent;
  let fixture: ComponentFixture<MatSlidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSlidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSlidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
