import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { PopmenuComponent } from './../../components/popmenu/popmenu.component';
import { HomeResultsPage } from './home-results.page';
import { SelectRegionModal } from './select-region';

const routes: Routes = [
  {
    path: '',
    component: HomeResultsPage
  },
  {
    path: 'select-region',
    component: SelectRegionModal
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeResultsPage, PopmenuComponent, SelectRegionModal]
})
export class HomeResultsPageModule {}
