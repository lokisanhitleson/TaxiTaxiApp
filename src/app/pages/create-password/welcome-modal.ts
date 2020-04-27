import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'welcome-modal',
  templateUrl: './welcome-modal.html',
  styleUrls: ['./welcome-modal.scss'],
})
export class WelcomeModal implements OnInit {
  
  modalTitle:string;
  modelId:number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private navCtrl: NavController,
    public TranslateModule : TranslateModule,
    public modalCtrl: ModalController,
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
  async cancelModal() {
     this.modalController.dismiss();
  }
  async submitModal() {
    await this.modalController.dismiss();
  }

  goToAddvehicle(){
    this.modalController.dismiss();
    this.navCtrl.navigateRoot('/my-vehicles');
  }
  initializeItems(){}

}