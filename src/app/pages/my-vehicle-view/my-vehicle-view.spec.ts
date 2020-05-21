import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVehicleViewPage } from './my-vehicle-view.page';

describe('MyVehicleViewPage', () => {
  let component: MyVehicleViewPage;
  let fixture: ComponentFixture<MyVehicleViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVehicleViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVehicleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
