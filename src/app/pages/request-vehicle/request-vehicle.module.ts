import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { RequestVehiclePage } from './request-vehicle.page';
import { PlacesModalPage } from "./places.page";
import { VehicleModalPage } from "./vehicle.model";
import { CalendarModule } from 'ion2-calendar';

const routes: Routes = [
  {
    path: '',
    component: RequestVehiclePage
  },
  {
    path: 'places-modal',
    component: PlacesModalPage
  },
  {
    path: 'vehicle-model',
    component: VehicleModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestVehiclePage,PlacesModalPage, VehicleModalPage]
})
export class RequestVehiclePageModule {}
