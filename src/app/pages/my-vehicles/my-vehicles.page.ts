import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarModal, CalendarModalOptions,DayConfig,CalendarResult } from 'ion2-calendar';
import { ModalController, NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular/';
import * as moment from "moment";

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.page.html',
  styleUrls: ['./my-vehicles.page.scss'],
})
export class MyVehiclesPage implements OnInit {
  @ViewChild('myVehicleSlider') slides: IonSlides;
  daterange: string;
  prevShow:boolean = true;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor( public modalCtrl: ModalController,public navCtrl: NavController,) { }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
}

swipeNext(){
  this.slides.lockSwipes(false);
  this.slides.slideNext();
  this.prevShow = true;
  this.slides.lockSwipes(true);
}
swipePrev(){
  this.slides.lockSwipes(false);
  this.slides.slidePrev();
  this.prevShow = true;
  this.slides.lockSwipes(true);
}

// goToFinish() {
//   this.navCtrl.navigateForward('home-results');
// } 

//Calendar Picker
  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'single',
      title: 'Calendar',
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });
  
    myCalendar.present();
    const event: any = await myCalendar.onDidDismiss();
    const newFormat = moment(event.data.dateObj).format("DD-MMMM-YYYY");
    this.daterange = newFormat;
  }

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

}
