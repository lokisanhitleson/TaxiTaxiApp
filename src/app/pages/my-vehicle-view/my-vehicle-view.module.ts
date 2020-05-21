import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { MyVehicleViewPage } from './my-vehicle-view.page';
import { myVehicleViewService } from './my-vehicle-view.service';

const routes: Routes = [
  {
    path: '',
    component: MyVehicleViewPage
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
  declarations: [MyVehicleViewPage],
  providers: [
    myVehicleViewService
  ]
})
export class MyVehicleViewModule {}
