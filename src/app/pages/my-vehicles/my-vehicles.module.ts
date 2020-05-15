import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ArchwizardModule } from 'ng2-archwizard';

import { IonicModule } from '@ionic/angular';

import { MyVehiclesPage } from './my-vehicles.page';
import { UploadVehicle } from "./upload-vehicle";

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
    IonicModule,
    ArchwizardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyVehiclesPage, UploadVehicle]
})
export class MyVehiclesPageModule { }
