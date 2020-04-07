import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVehiclePage } from './request-vehicle.page';

describe('RequestVehiclePage', () => {
  let component: RequestVehiclePage;
  let fixture: ComponentFixture<RequestVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
