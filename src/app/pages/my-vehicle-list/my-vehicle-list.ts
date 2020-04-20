import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, LoadingController, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-my-vehicle-list',
  templateUrl: './my-vehicle-list.html',
  styleUrls: ['./my-vehicle-list.scss'],
})
export class MyVehicleList implements OnInit {
  mobilenumber: any;
  givenStar:number = 0;

  constructor(private _location: Location, 
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
    ) {

  }
  
  cars =[
    {carname:"Hyundai i10", seater:"4 Seater", regNo:"TN-22-Z-3456", img:"assets/img/i10.jpg"},
    {carname:"Ford Figo", seater:"4 Seater", regNo:"TN-20-P-6756", img:"assets/img/figo.jpg"}
    ];

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

previous() 
{ 
  this._location.back(); 
}

goAddVehicle(){
this.navCtrl.navigateRoot('/my-vehicles');
}
}
