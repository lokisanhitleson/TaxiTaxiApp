import { Component, OnInit} from '@angular/core';
import { CalendarModal, CalendarModalOptions,DayConfig,CalendarResult } from 'ion2-calendar';
import { ModalController,AlertController,PopoverController,NavController, Platform } from '@ionic/angular';
import { PlacesModalPage } from "./places.page";
import * as moment from "moment";
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-about',
  templateUrl: './request-vehicle.page.html',
  styleUrls: ['./request-vehicle.page.scss'],
})
export class RequestVehiclePage implements OnInit {
  endDate: string;
  startDate: string;
  fromLocation = 'Avadi';
  toLocation = 'T.Nagar';
  selectedCity:any = "Avadi";
  public tripSelector: string ='oneWay';

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];


  constructor(
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private media: Media,
    private file: File,
    public platform: Platform
    ) { }

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
    this.endDate = newFormat;
    this.startDate = newFormat;
  }
  
  async fromLocationModal() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Pickup Location',
      // message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your City',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.fromLocation = data.location;
          }
        }
      ]
    });
    changeLocation.present();
  }
 
  async openPlacesModal() {
    const modal = await this.modalCtrl.create({
      component: PlacesModalPage,
      componentProps: {
        "Title": "Select Location"
      }
    });
 
    modal.onDidDismiss().then((selectedCity) => {
      if (selectedCity !== null) {
        this.selectedCity = selectedCity.data;
      }
    });
 
    return await modal.present();
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-results');
  }
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


  ionViewWillEnter() {
    this.getAudioList();
  }

  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.m4a';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
  }

  // playAudio(file,idx) {
  //   if (this.platform.is('ios')) {
  //     this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
  //     this.audio = this.media.create(this.filePath);
  //   } else if (this.platform.is('android')) {
  //     this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
  //     this.audio = this.media.create(this.filePath);
  //   }
  //   this.audio.play();
  //   this.audio.setVolume(0.8);
  // }

  stopAudio() {
    this.audio.stop();
  }


}
