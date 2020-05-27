import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { VehicleInfo } from './vehicle_info.page';
import { VehicleDetailPage } from "../vehicle-detail/vehicle_detail.page";
import { AgentProfilePage } from "../agent-profile/agent-profile.page";
const routes: Routes = [
  {
    path: '',
    component: VehicleInfo
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
    VehicleInfo
  ],
  declarations: [VehicleInfo, VehicleDetailPage, AgentProfilePage]
})
export class VehicleInfoModule { }
