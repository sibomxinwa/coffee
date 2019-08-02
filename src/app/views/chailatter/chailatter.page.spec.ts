import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChailatterPage } from './chailatter.page';

describe('ChailatterPage', () => {
  let component: ChailatterPage;
  let fixture: ComponentFixture<ChailatterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChailatterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChailatterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
