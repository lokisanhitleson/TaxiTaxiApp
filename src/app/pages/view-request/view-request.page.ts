import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.page.html',
  styleUrls: ['./view-request.page.scss'],
})
export class ViewRequestPage implements OnInit {

  constructor(private _location: Location) { }
  request =[
    {carname:"Toyota Innova",agentname:"R.Satheesh Kumar",location:"Chennai",description:"I need a 7 seater vehicle", mobilenumber:"9884420042",icon:"mail", img:"assets/img/innova.jpg"},
    {carname:"Indica v2",agentname:"S.Mahalingam",location:"Avadi",description:"Need a 5 seater vehicle urgently", mobilenumber:"8754491205",icon:"mail", img:"assets/img/indica-v2.jpg"},
    {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",description:"Anyone have Tata Ace? ", mobilenumber:"8988756523",icon:"mail", img:"assets/img/xylo.jpg"},
    {carname:"Ford Figo",agentname:"P.Yogaraj",location:"Porur",description:"I need a 4 seater vehicle", mobilenumber:"8798875679",icon:"mail", img:"assets/img/figo.jpg"},
    {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",description:"I want a honda city", mobilenumber:"998875659",icon:"mail", img:"assets/img/i10.jpg"},
  ];

  oldrequest =[
    {carname:"Toyota Innova",agentname:"R.Satheesh Kumar",location:"Chennai",description:"I need a 7 seater vehicle", mobilenumber:"9884420042",icon:"mail-open", img:"assets/img/innova.jpg"},
    {carname:"Indica v2",agentname:"S.Mahalingam",location:"Avadi",description:"Need a 5 seater vehicle urgently", mobilenumber:"8754491205",icon:"mail-open", img:"assets/img/indica-v2.jpg"},
    {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",description:"Anyone have Tata Ace? ", mobilenumber:"8988756523",icon:"mail-open", img:"assets/img/xylo.jpg"},
    {carname:"Ford Figo",agentname:"P.Yogaraj",location:"Porur",description:"I need a 4 seater vehicle", mobilenumber:"8798875679",icon:"mail-open", img:"assets/img/figo.jpg"},
    {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",description:"I want a honda city", mobilenumber:"998875659",icon:"mail-open", img:"assets/img/i10.jpg"},
    {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",description:"Anyone have Tata Ace? ", mobilenumber:"8988756523",icon:"mail-open", img:"assets/img/xylo.jpg"},
    {carname:"Ford Figo",agentname:"P.Yogaraj",location:"Porur",description:"I need a 4 seater vehicle", mobilenumber:"8798875679",icon:"mail-open", img:"assets/img/figo.jpg"},
    {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",description:"I want a honda city", mobilenumber:"998875659",icon:"mail-open", img:"assets/img/i10.jpg"}
  ];

  ngOnInit() {
  }
  previous() 
  { 
    this._location.back(); 
  }

}
