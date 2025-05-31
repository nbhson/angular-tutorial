/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('Common matchers', () => {
    expect(1 + 1).toBe(2);
    expect({ name: 'Sơn' }).toEqual({ name: 'Sơn' });
  });

  test('Truthiness', () => {
    expect({}).toBeTruthy();
    expect(0).toBeFalsy();
    expect(undefined).toBeUndefined();
  });

  test('Numbers', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('String', () => {
    expect('team').not.toMatch(/I/);
  });

  test('Array', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })

  test('Exceptions', () => {
    function compileAndroidCode() {
      throw new Error('you are using the wrong JDK!');
    }

    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  })
});
