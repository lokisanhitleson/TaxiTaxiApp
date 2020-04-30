import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { CreatePasswordPage } from './create-password';
import { WelcomeModal } from "./welcome-modal";

const routes: Routes = [
  {
    path: '',
    component: CreatePasswordPage
  },
  {
    path: 'welcome-modal',
    component: WelcomeModal
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatePasswordPage, WelcomeModal]
})
export class CreatePasswordPageModule {}
