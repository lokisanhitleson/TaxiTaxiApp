import { Component, OnInit } from '@angular/core';
import { CalendarModal,CalendarComponentOptions, CalendarModalOptions,DayConfig,CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import * as moment from "moment";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {
  range: string;

  constructor( public modalCtrl: ModalController, private _location: Location) { }

  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  carModels = [
    "Toyota Platinum Etios",
    "Maruti Suzuki Dzire",
    "Renault Lodgy",
    "Mahindra Scorpio",
    "Toyota Innova Crysta",
    "Hyundai Xcent",
    "Nissan Sunny"
  ];
  carType = ["Mini", "Micro", "Prime"];

  ngOnInit() {
  }
  
  previous() 
{ 
  this._location.back(); 
}

}
