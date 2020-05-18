import { Component, OnInit } from '@angular/core';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController, AlertController, PopoverController, NavController, Platform } from '@ionic/angular';
import { PlacesModalPage } from "./places.page";
import * as moment from "moment";
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { Location } from '@angular/common';
import { VehicleModalPage } from './vehicle.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  selectedCity: any = "Avadi";
  selectedVehicle: any = "Indica";
  public tripSelector: string = 'oneWay';
  status: String = "";
  recording: boolean = false;
  audioFile: MediaObject;

  constructor(
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private media: Media,
    private file: File,
    public platform: Platform,
    private _location: Location,
    public translate: TranslateService,
    public TranslateModule: TranslateModule
  ) { }


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

  async openVehiclesModal() {
    const modal = await this.modalCtrl.create({
      component: VehicleModalPage,
      componentProps: {
        "Title": "Select Vehicle Model"
      }
    });

    modal.onDidDismiss().then((selectedVehicle) => {
      if (selectedVehicle !== null) {
        this.selectedVehicle = selectedVehicle.data;
      }
    });

    return await modal.present();
  }

  //Media file Record
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];



  getAudioList() {
    if (localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }
  ionViewWillEnter() {
    this.getAudioList();
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'voice-note' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'voice-note' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
    this.status = "Recording...";
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
    this.audio.release();
    this.status = "Done!";
  }

  playAudio(file, idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home/tabs/home-results');
  }
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  previous() {
    this._location.back();
  }

}
