import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarModal, CalendarModalOptions,DayConfig,CalendarResult } from 'ion2-calendar';
import { ModalController, NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular/';
import { Location } from '@angular/common';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
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

  croppedImagepath = "assets/no-image.png";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor( public modalCtrl: ModalController,
    public navCtrl: NavController,
    private _location: Location,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
    ) { }

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

//Image Crop and Upload
pickImage(sourceType) {
  const options: CameraOptions = {
    quality: 50,
    allowEdit: false,
    correctOrientation: true,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.cropImage(imageData)
  }, (err) => {
    // Handle error
  });
}

async selectImage() {
  const actionSheet = await this.actionSheetController.create({
    header: "Select Image source",
    buttons: [{
      text: 'Load from Library',
      handler: () => {
        this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
      }
    },
    {
      text: 'Use Camera',
      handler: () => {
        this.pickImage(this.camera.PictureSourceType.CAMERA);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
    ]
  });
  await actionSheet.present();
}

cropImage(fileUrl) {
  this.crop.crop(fileUrl, { quality: 50 })
    .then(
      newPath => {
        this.showCroppedImage(newPath.split('?')[0])
      },
      error => {
        alert('Error cropping image' + error);
      }
    );
}

showCroppedImage(ImagePath) {
  this.isLoading = true;
  var copyPath = ImagePath;
  var splitPath = copyPath.split('/');
  var imageName = splitPath[splitPath.length - 1];
  var filePath = ImagePath.split(imageName)[0];

  this.file.readAsDataURL(filePath, imageName).then(base64 => {
    this.croppedImagepath = base64;
    this.isLoading = false;
  }, error => {
    alert('Error in showing image' + error);
    this.isLoading = false;
  });
}

  previous() 
  { 
    this._location.back(); 
  }
}
