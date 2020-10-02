import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { viewRequestsService } from './view-request.service';
import { IonicModule } from '@ionic/angular';
import { DetailRequestPage } from "./detail-request.page";

const routes: Routes = [
  {
    path: '',
    component: DetailRequestPage
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
  declarations: [DetailRequestPage],
  providers: [
    viewRequestsService,
    
  ]
})
export class DetailRequestPageModule {}
