import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-filter',
  templateUrl: './rating-modal.html',
  styleUrls: ['./rating-modal.scss'],
})
export class RatingModalPage implements OnInit {
  public rate:number = 0;
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async submitModal() {
    const onSubmitedData = this.rate;
    await this.modalCtrl.dismiss(onSubmitedData);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  rateSelected(selected : number){
    this.rate = selected;
  }

}
