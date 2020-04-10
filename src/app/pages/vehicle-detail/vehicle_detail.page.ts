import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle_detail.page.html',
  styleUrls: ['./vehicle_detail.page.scss'],
})
export class VehicleDetailPage implements OnInit {
  myDate:string;
  myTime:string;
  myDateNTime:string;

  vehicles = [
    {img:"assets/img/innova1.jpg"},
    {img:"assets/img/Toyota_Innova_Interior.jpg"}
  ];
  vehicleInfo = [
    {label:"Registration Number", value:"TN-18-AN-2345"},
    {label:"Registration date", value:"12/09/2016"},
    {label:"Owner Name", value:"K. Ramakrishnan"},
    {label:"Ownership Serial", value:"1"},
    {label:"Type of Vehicle", value:"LMV (Car)"},
    {label:"Maker", value:"Toyota"},
    {label:"Fuel", value:"Petrol"},
    {label:"Color", value:"Cherry Red"},
    {label:"Year of Manufacture", value:"2014"},
    {label:"Chasis Number", value:"755111000"},
    {label:"Seating Capacity", value:"7"},
    {label:"F.C", value:"March 2028"},
    {label:"Insurance", value:"20/08/2019 - 19/08/2020"},
  ];
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private datePicker: DatePicker,private _location: Location) { }
  showDatepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText:"Save Date",
      todayText:"Set Today"
    }).then(
      date => {
        this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }  

  showTimepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      okText:"Save Time",
      nowText:"Set Now"
    }).then(
      time => {
        this.myTime =  time.getHours()+":"+time.getMinutes();
      },
      err => console.log('Error occurred while getting time: ', err)
    );
  }  

  showDateTimepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL,
      doneButtonLabel:"Save Date & Time",
      is24Hour:false
    }).then(
      dateTime => {
        this.myDateNTime = dateTime.getDate()+"/"+dateTime.toLocaleString('default', { month: 'long' })+"/"+dateTime.getFullYear()+" "+dateTime.getHours()+":"+dateTime.getMinutes();
      },
      err => console.log('Error occurred while getting dateTime: ', err)
    );
  }  
  
  slidesDidLoad(slides: IonSlides) {
    slides.stopAutoplay();
  }

  ngOnInit() {
  }
  previous() 
  { 
    this._location.back(); 
  }
}
