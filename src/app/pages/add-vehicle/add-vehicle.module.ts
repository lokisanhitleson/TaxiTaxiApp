import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from 'ion2-calendar';
import { IonicModule } from '@ionic/angular';

import { AddVehiclePage } from './add-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehiclePage
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
  declarations: [AddVehiclePage]
})
export class AddVehiclePageModule {}
