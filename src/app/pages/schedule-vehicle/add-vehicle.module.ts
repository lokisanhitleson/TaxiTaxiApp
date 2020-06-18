import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from 'ion2-calendar';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { AddVehiclePage } from './add-vehicle.page';
import { VehicleSelectModal } from './vehicle-select';
import { AddVehicleService } from './add-vehicle.service';

const routes: Routes = [
  {
    path: '',
    component: AddVehiclePage
  },
  {
    path: 'select-vehicle',
    component: VehicleSelectModal
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVehiclePage, VehicleSelectModal],
  providers: [AddVehicleService]
})
export class AddVehiclePageModule { }
