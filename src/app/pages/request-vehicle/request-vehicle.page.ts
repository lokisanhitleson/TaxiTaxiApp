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
status: String = "";
recording:boolean = false;
audioFile : MediaObject;


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

//Record Audio
  RecordAudio(){
    this.audioFile = this.media.create(this.file.externalRootDirectory+'/voice-note.mp3');
    this.audioFile.startRecord();
    this.status = "Recording...";
    this.recording = true;
    }
    
    StopRecording(){
    this.audioFile.stopRecord();
    this.status = "Done!"
    this.recording = false;
    }



  goToHome() {
    this.navCtrl.navigateRoot('/home/tabs/home-results');
  }
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


}
