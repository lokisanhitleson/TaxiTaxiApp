import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, LoadingController, ModalController } from "@ionic/angular";
import { RatingModalPage } from '../../pages/modal/rating-modal/rating-modal';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  mobilenumber: any;
  givenStar:number = 0;
  today; 
  nextThirty; 
  selectedDate; 

  constructor(private _location: Location, 
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
    ) {

    this.today = new Date().toISOString();
    let now = new Date();
    now.setDate(now.getDate() + 30);
    this.nextThirty = now.toISOString();

  }
  
  cars =[
    {carname:"Toyota Innova",agentname:"R.Satheesh Kumar",location:"Chennai",seater:"7 Seater", mobilenumber:"9884420042", img:"assets/img/innova.jpg"},
    {carname:"Indica v2",agentname:"S.Mahalingam",location:"Avadi",seater:"4 Seater", mobilenumber:"8754491205", img:"assets/img/indica-v2.jpg"},
    {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",seater:"7 Seater", mobilenumber:"8988756523", img:"assets/img/xylo.jpg"},
    {carname:"Ford Figo",agentname:"P.Yogaraj",location:"Porur",seater:"4 Seater", mobilenumber:"8798875679", img:"assets/img/figo.jpg"},
    {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",seater:"4 Seater", mobilenumber:"998875659", img:"assets/img/i10.jpg"}
  ];
  openWhatsApp(){
      window.open(`https://api.whatsapp.com/send?phone=${this.mobilenumber}`);
  }

async presentLoading() {
  const loading = await this.loadingCtrl.create({
    message: 'Please wait...',
    duration: 2000,
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

ngOnInit() {
}

async openRating () {
  const modal = await this.modalCtrl.create({
    component: RatingModalPage,
    cssClass: 'rating-modal-css'
  });
  modal.onDidDismiss().then((givenStar) => {
    if (givenStar !== null) {
      this.givenStar = givenStar.data;
    }
  });

  return await modal.present();
}

toAgentProfile(){
  this.presentLoading();
  this.navCtrl.navigateRoot('/home/tabs/agent-profile');
}

toVehicleProfile(){
  this.presentLoading();
  this.navCtrl.navigateRoot('/home/tabs/vehicle-detail');
}

previous() 
{ 
  this._location.back(); 
}
}
