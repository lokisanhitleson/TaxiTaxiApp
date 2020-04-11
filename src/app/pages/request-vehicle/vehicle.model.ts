import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
 
@Component({
  selector: 'vehicle-model',
  templateUrl: './vehicle.model.html',
  styleUrls: ['./vehicle.model.scss'],
})
export class VehicleModalPage implements OnInit {
  
  modalTitle:string;
  modelId:number;
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
    const onSubmitedData = this.VehicleNames;
    await this.modalController.dismiss(onSubmitedData);
  }

  VehicleNames: string;

  initializeItems(){
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
    vehicleSelected(selected : string){
      this.VehicleNames = selected;
      this.carModels = [];
    }
}