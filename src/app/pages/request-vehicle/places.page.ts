import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
 
@Component({
  selector: 'places-modal',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesModalPage implements OnInit {
  
  modalTitle:string;
  modelId:number;
  isCityAvailable = false;
    cities: any;
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
    const onSubmitedData = this.cityNames;
    await this.modalController.dismiss(onSubmitedData);
  }

  cityNames: string;

  initializeItems(){
        this.cities = [
          "Avadi","Ambattur","Chengalpatu","Ekattuthangal","Padi",
          "Manali new town",
        "Kodungaiyur East",
        "Kodungaiyur West",
        "Madhavaram",
        "Madhavaram Milk Colony",
        "Mathur MMDA",
        "Puzhal",
        "Moolakadai",
        "Kolathur",
        "Parry's Corner",
        "Royapuram",
        "Villivakkam",
        "Perambur",
        "Korukkupet",
        "Tiruvottiyur",
        "Vyasarpadi",
        "Manali",
        "Tondiarpet",
        "Vallalar Nagar",
        "Ennore",
        "Old Washermenpet",
        "Kavangarai",
        "New Washermenpet",
        "Korukkupet",
        "Mannadi",
        "George Town",
        "Seven Wells",
        "Basin Bridge",
        "Sowcarpet",
        "Park Town",
        "Periametu",
        "Choolai",
        "Veppery",
        "Pattalam",
        "Pulinanthope",
        "M.K.B Nagar",
        "Sharma Nagar",
        "Selavoyal",
        "Edapalayam",
        "Manjambakkam",
        "Ponniammanmedu",
        "Sembiam",
        "T.V.K Nagar",
        "ICF Colony north",
        "Central",
        "Padi",
        "Korattur",
        "Lakshmi puram",
        "Ambattur north",
        "Oragadam",
        "Ayapakkam",
        "Pattravakkam",
        "Thirumullaivoyal north",
        "Avadi north",
        "Redhills",
        "Ajax",
        "Kathivakkam",
        "Ernavur",
        "WIMCO",
        "Sathangadu",
        "Rajakadai",
        "Kadambakkam",
        "Kathirvedu",
        "Moolakothiram",
        "Erukanchery",
        "Broadway",
        "Jamalia",
        "Kallikuppam",
        "Pattabiram",
        "Kosapet",
        ];
        // {name:"Avadi"},{name:"Ambattur"},{name:"Chengalpatu"},{name:"Ekattuthangal"},{name:"Padi"}
        
    }
    getCities(ev: any) {

            this.initializeItems();
        
            const val = ev.target.value;
        
            if (val && val.trim() != '') {
                this.isCityAvailable = true;
                this.cities = this.cities.filter((city) => {
                return (city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
    citySelected(selected : string){
      this.cityNames = selected;
      this.cities = [];
    }
}