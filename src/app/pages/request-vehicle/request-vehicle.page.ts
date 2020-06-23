import { Component, OnInit } from '@angular/core';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController, AlertController, PopoverController, NavController, Platform } from '@ionic/angular';
import * as moment from 'moment';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { Location } from '@angular/common';
import { SelectRegionModal } from '../select-region/select-region';
import { VehicleBrandModal } from './vehicle.brand';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './request-vehicle.page.html',
  styleUrls: ['./request-vehicle.page.scss'],
})
export class RequestVehiclePage implements OnInit {

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
    public translateModule: TranslateModule
  ) { }
  endDate: string;
  startDate: string;
  comments: string;
  fromLocation = 'Avadi';
  toLocation = 'T.Nagar';
  selectedCity: any = 'Avadi';
  selectedVehicle: any = 'Indica';
  public tripSelector = 'oneWay';
  status: String = '';
  recording = false;
  audioFile: MediaObject;

  vehicleBrand: string;
  vehicleNameId: number;
  vehicleName: string;
  source: string;
  sourceLatitude: number;
  sourceLongitude: number;
  sourcePlaceId: string;
  destination: string;
  destinationLatitude: number;
  destinationLongitude: number;
  destinationPlaceId: string;
  errorDiv: boolean;
  currentError: string;

  carType = ['Mini', 'Micro', 'Prime'];

  // Media file Record
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];

  async openCalendar(type: string) {
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
    const newFormat = moment(event.data.dateObj).format('DD-MMMM-YYYY');
    if (type === 'START') {
      this.startDate = newFormat;
    }
    if (type === 'END') {
      this.endDate = newFormat;
    }
    this.clearError();
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

  async openPlacesModal(type) {
    const modal = await this.modalCtrl.create({
      component: SelectRegionModal,
      componentProps: {
        'Title': 'Select Location'
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        if (type === 'SOURCE') {
          this.source = data.data.placeName;
          this.sourceLatitude = data.data.latitude;
          this.sourceLongitude = data.data.longitude;
          this.sourcePlaceId = data.data.placeId;
        } else if (type === 'DESTINATION') {
          this.destination = data.data.placeName;
          this.destinationLatitude = data.data.latitude;
          this.destinationLongitude = data.data.longitude;
          this.destinationPlaceId = data.data.placeId;
        }
        this.clearError();
      }
    });

    return await modal.present();
  }
  async openVehiclesModal() {
    const modal = await this.modalCtrl.create({
      component: VehicleBrandModal
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.vehicleBrand = data.data.vehicleBrand;
        this.vehicleNameId = data.data.vehicleNameId;
        this.vehicleName = data.data.vehicleName;
        this.clearError();
      }
    });

    return await modal.present();
  }
  clearError() {
    this.currentError = null;
    this.errorDiv = false;
  }
  requestSubmit() {
    if (this.errorCheck()) {
      const postData: any = {};
      postData.source = this.source;
      postData.sourcePlaceId = this.sourcePlaceId;
      postData.sourceLatitude = this.sourceLatitude;
      postData.sourceLongitude = this.sourceLongitude;
      postData.destination = this.destination;
      postData.destinationPlaceId = this.destinationPlaceId;
      postData.destinationLatitude = this.destinationLatitude;
      postData.destinationLongitude = this.destinationLongitude;
      postData.startDate = this.startDate;
      postData.vehicleNameId = this.vehicleNameId;
      if (this.endDate) {
        postData.endDate = this.endDate;
      }
      if (this.comments) {
        postData.comments = this.comments;
      }

    }
  }
  errorCheck(): boolean {
    if (!this.sourcePlaceId || !this.destinationPlaceId || !this.startDate || !this.vehicleNameId) {
      if (!this.sourcePlaceId) {
        this.currentError = 'Please select pickup location';
      } else if (!this.destinationPlaceId) {
        this.currentError = 'Please select drop location';
      } else if (!this.startDate) {
        this.currentError = 'Please select travel start date';
      } else if (!this.vehicleNameId) {
        this.currentError = 'Please select vehicle model';
      }
      this.errorDiv = true;
      return false;
    } else {
      this.currentError = null;
      this.errorDiv = false;
      return true;
    }
  }


  // Record Audio Start //
  ionViewWillEnter() {
    this.getAudioList();
  }
  getAudioList() {
    if (localStorage.getItem('audiolist')) {
      this.audioList = JSON.parse(localStorage.getItem('audiolist'));
      console.log(this.audioList);
    }
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
    this.status = 'Recording...';
  }
  stopRecord() {
    this.audio.stopRecord();
    const data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem('audiolist', JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
    this.audio.release();
    this.status = 'Done!';
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
  // Record Audio End //

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
