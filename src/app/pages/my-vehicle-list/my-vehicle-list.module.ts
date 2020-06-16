import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from "ionic4-rating";

import { IonicModule } from '@ionic/angular';

import { MyVehicleList } from './my-vehicle-list';
import { MyVehicleListService } from './my-vehicle-list.service';

const routes: Routes = [
  {
    path: '',
    component: MyVehicleList
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyVehicleList],
  providers: [
    MyVehicleListService
  ]
})
export class MyVehicleListModule { }
