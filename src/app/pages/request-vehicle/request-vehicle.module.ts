import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { RequestVehiclePage } from './request-vehicle.page';
import { VehicleBrandModal } from './vehicle.brand';
import { CalendarModule } from 'ion2-calendar';
import { TranslateModule } from '@ngx-translate/core';
import { RequestVehicleService } from './request-vehicle.service';


const routes: Routes = [
  {
    path: '',
    component: RequestVehiclePage
  },
  {
    path: 'vehicle-model',
    component: VehicleBrandModal
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestVehiclePage, VehicleBrandModal],
  providers: [RequestVehicleService]
})
export class RequestVehiclePageModule { }
