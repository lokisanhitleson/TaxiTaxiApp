import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { VehicleDetailPage } from './vehicle_detail.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    VehicleDetailPage
  ],
  declarations: [VehicleDetailPage]
})
export class VehicleDetailPageModule { }
