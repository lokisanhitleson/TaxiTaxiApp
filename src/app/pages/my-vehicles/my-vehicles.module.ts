import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArchwizardModule } from 'ng2-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { MyVehiclesPage } from './my-vehicles.page';
import { UploadVehicle } from "./upload-vehicle";
import { AddVehicleService } from './add-vehicle.service';

const routes: Routes = [
  {
    path: '',
    component: MyVehiclesPage
  },
  {
    path: 'upload-vehicle',
    component: UploadVehicle
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ArchwizardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyVehiclesPage, UploadVehicle],
  providers: [
    AddVehicleService
  ]
})
export class MyVehiclesPageModule { }
