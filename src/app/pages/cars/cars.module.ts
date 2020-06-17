import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from 'ionic4-rating';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { CarsPage } from './cars.page';
import { RatingModalPage } from '../../pages/modal/rating-modal/rating-modal';
import { CarsService } from './cars.service';

const routes: Routes = [
  {
    path: '',
    component: CarsPage
  },
  {
    path: '',
    component: RatingModalPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarsPage, RatingModalPage],
  providers: [CarsService]
})
export class CarsPageModule { }
