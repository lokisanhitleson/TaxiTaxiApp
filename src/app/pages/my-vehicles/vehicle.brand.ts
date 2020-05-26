import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'vehicle-brand',
  templateUrl: './vehicle.brand.html',
  styleUrls: ['./vehicle.brand.scss'],
})
export class VehicleBrandModal implements OnInit {

  modalTitle: string;
  modelId: number;
  isVehicleAvailable = false;
  carModels: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
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
    const onSubmitedData = this.BrandNames;
    await this.modalController.dismiss(onSubmitedData);
  }

  BrandNames: string;
  brands = [
    { img: "./assets/brand/bmw.png" },
    { img: "./assets/brand/ford.png" },
    { img: "./assets/brand/fiat.png" },
    { img: "./assets/brand/honda.png" },
    { img: "./assets/brand/hyundai.png" },
    { img: "./assets/brand/mahindra.png" },
    { img: "./assets/brand/suzuki.png" },
    { img: "./assets/brand/nissan.png" },
    { img: "./assets/brand/toyota.png" },
    { img: "./assets/brand/volkswagen.png" },
    { img: "./assets/brand/chevrolet.png" },
    { img: "./assets/brand/tata.png" }
  ]
  initializeItems() {
    this.carModels = [
      "Toyota Platinum Etios",
      "Maruti Suzuki Dzire",
      "Renault Lodgy",
      "Mahindra Scorpio",
      "Toyota Innova Crysta",
      "Hyundai Xcent",
      "Nissan Sunny"
    ];
    // {name:"Avadi"},{name:"Ambattur"},{name:"Chengalpatu"},{name:"Ekattuthangal"},{name:"Padi"}

  }
  getVehicles(ev: any) {

    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.isVehicleAvailable = true;
      this.carModels = this.carModels.filter((car) => {
        return (car.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  vehicleSelected(selected: string) {
    this.BrandNames = selected;
    this.carModels = [];
  }
}