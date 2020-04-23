import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVehicleList } from './my-vehicle-list';

describe('AboutPage', () => {
  let component: MyVehicleList;
  let fixture: ComponentFixture<MyVehicleList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVehicleList ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVehicleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
