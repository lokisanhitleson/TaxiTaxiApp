import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  mobilenumber: any;
  
  today; 
  nextThirty; 
  selectedDate; 

  constructor(private _location: Location) {

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
ngOnInit() {
}
previous() 
{ 
  this._location.back(); 
}
}
