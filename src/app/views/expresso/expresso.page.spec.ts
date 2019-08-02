import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressoPage } from './expresso.page';

describe('ExpressoPage', () => {
  let component: ExpressoPage;
  let fixture: ComponentFixture<ExpressoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
