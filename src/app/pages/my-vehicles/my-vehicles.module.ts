import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ArchwizardModule } from 'ng2-archwizard';

import { IonicModule } from '@ionic/angular';

import { MyVehiclesPage } from './my-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: MyVehiclesPage
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
  declarations: [MyVehiclesPage]
})
export class MyVehiclesPageModule {}
