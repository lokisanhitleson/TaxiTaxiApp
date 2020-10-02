import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { viewRequestsService } from './view-request.service';
import { IonicModule } from '@ionic/angular';
import { MyVehicleViewService } from '../my-vehicle-view/my-vehicle-view.service';
import { ViewRequestPage } from './view-request.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRequestPage
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
  declarations: [ViewRequestPage], 
  providers: [
    viewRequestsService,
    MyVehicleViewService
  ]
})
export class ViewRequestPageModule {}
