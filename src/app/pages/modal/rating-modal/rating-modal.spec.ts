import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingModalPage } from './rating-modal';

describe('SearchFilterPage', () => {
  let component: RatingModalPage;
  let fixture: ComponentFixture<RatingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
