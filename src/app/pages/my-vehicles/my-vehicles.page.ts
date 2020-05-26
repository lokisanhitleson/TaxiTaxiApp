import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import * as moment from "moment";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadVehicle } from "./upload-vehicle";
import { AddVehicleService } from "./add-vehicle.service";
import { VehicleNameWithBrand } from '../models/vehicle-name.model';
import { ColorOfVehicle } from '../models/vehicle-color.model';
import { VariantOfVehicle } from '../models/vehicle-variant.model';
import { FuelTypeOfVehicle } from '../models/fuel-type.model';
import { VehicleCondition } from '../models/vehicle-condition.model';
import { WheelTypeOfVehicle } from '../models/wheel-type.model';
import { BreakingSystemOfVehicle } from '../models/breaking-system.model';
import { InsuranceType } from '../models/insurance-type.model';
import { InsuranceCompany } from '../models/insurance-company.model';

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.page.html',
  styleUrls: ['./my-vehicles.page.scss'],
})
export class MyVehiclesPage implements OnInit {
  daterange: string;
  prevShow: boolean = true;

  croppedImagepath = "assets/no-image.png";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  public vehicleForm: {
    form1: FormGroup,
    form2: FormGroup,
    form3: FormGroup
  };
  form1Submitted: boolean;
  form2Submitted: boolean;
  form3Submitted: boolean;
  modelOpened: boolean;
  picturesSelected: boolean;
  vehicleNames: [VehicleNameWithBrand];
  vehicleBrand: string;
  vehicleType: string;
  vehicleColors: [ColorOfVehicle];
  years: [number];
  vehicleVariants: [VariantOfVehicle];
  vehicleFuelTypes: [FuelTypeOfVehicle];
  vehicleConditions: [VehicleCondition];
  vehicleWheelTypes: [WheelTypeOfVehicle];
  vehicleBreakingSystems: [BreakingSystemOfVehicle];
  insuranceTypes: [InsuranceType];
  insuranceCompanies: [InsuranceCompany];

  displayImage = "assets/img/displayview.jpg";
  frontImage = "assets/img/frontview.jpg";
  backImage = "assets/img/backview.jpg";
  leftImage = "assets/img/leftview.jpg";
  rightImage = "assets/img/rightview.jpg";

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private _location: Location,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public translate: TranslateService,
    public TranslateModule: TranslateModule,
    private addVehicleService: AddVehicleService,
    private formBuilder: FormBuilder
  ) {
    this.vehicleForm = {
      form1: this.createForm1(),
      form2: this.createForm2(),
      form3: this.createForm3()
    }
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      this.loadYears();
      await this.getVehicleNames();
      await this.getInsuranceCompanies();
      await this.getInsuranceTypes();
      await this.getVehicleConditions();
      loading.dismiss();
    } catch(err) {
      loading.dismiss();
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  createForm1(): FormGroup {
    return this.formBuilder.group({
        vehicleNameId: ['', Validators.required],
        registrationNo: ['', Validators.required],
        vehicleColorId: ['', Validators.required],
        manufactureYear: ['', Validators.required],
        vehicleVariantId: ['', Validators.required],
        fuelTypeId: ['', Validators.required]
    });
  }
  createForm2(): FormGroup {
    return this.formBuilder.group({
        vehicleConditionId: ['', Validators.required],
        accidentHistory: ['', Validators.required],
        chassisNo: ['', Validators.required],
        fcYear: ['', Validators.required],
        airBag: ['', Validators.required],
        wheelTypeId: ['', Validators.required],
        breakingSystemId: ['', Validators.required]
    });
  }
  createForm3(): FormGroup {
    return this.formBuilder.group({
        insuranceTypeId: ['', Validators.required],
        insuranceCompanyId: ['', Validators.required],
        insuranceNo: ['', Validators.required],
        startDate: ['', Validators.required],
        expiryDate: ['', Validators.required]
    });
  }

  loadYears() {
    const count = 20;
    const year = new Date().getFullYear();
    for(let i = year - count; i <= year; i ++ )
      if(this.years) this.years.push(i); else this.years = [i];
  }
  getVehicleNames() {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleNames().subscribe(data => {
        res(true);
        if(data && data.status == "SUCCESS") {
          this.vehicleNames = data.data;
        } else {
          if(!data) {
            this.toastCtrl.create({
              showCloseButton: true,
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            }).then(toast => toast.present());
          }
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleType(vehicleTypeId: number) {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleType(vehicleTypeId).subscribe(data => {
        if(data && data.status == "SUCCESS" && data.data.type) {
          this.vehicleType = data.data.type;
          res(true);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleColors(vehicleNameId: number) {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleColors(vehicleNameId).subscribe(data => {
        if(data && data.status == "SUCCESS") {
          res(true);
          this.vehicleColors = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleVariants(vehicleNameId: number) {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleVariants(vehicleNameId).subscribe(data => {
        if(data && data.status == "SUCCESS") {
          res(true);
          this.vehicleVariants = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleFuelTypes(vehicleNameId: number) {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleFuelTypes(vehicleNameId).subscribe(data => {
        if(data && data.status == "SUCCESS") {
          res(true);
          this.vehicleFuelTypes = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleConditions() {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleConditions().subscribe(data => {
        res(true);
        if(data && data.status == "SUCCESS") {
          this.vehicleConditions = data.data;
        } else {
          if(!data) {
            this.toastCtrl.create({
              showCloseButton: true,
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            }).then(toast => toast.present());
          }
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleWheelTypes(vehicleNameId: number) {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleWheelTypes(vehicleNameId).subscribe(data => {
        if(data && data.status == "SUCCESS") {
          res(true);
          this.vehicleWheelTypes = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getVehicleBreakingSystems(vehicleNameId: number) {
    return new Promise((res,rej) => {
      this.addVehicleService.getVehicleBreakingSystems(vehicleNameId).subscribe(data => {
        if(data && data.status == "SUCCESS") {
          res(true);
          this.vehicleBreakingSystems = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      })
    })
  }

  getInsuranceCompanies() {
    return new Promise((res,rej) => {
      this.addVehicleService.getInsuranceCompanies().subscribe(data => {
        res(true);
        if(data && data.status == "SUCCESS") {
          this.insuranceCompanies = data.data;
        } else {
          if(!data) {
            this.toastCtrl.create({
              showCloseButton: true,
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            }).then(toast => toast.present());
          }
        }
      }, async err => {
        rej(err)
      })
    })
  }

  getInsuranceTypes() {
    return new Promise((res,rej) => {
      this.addVehicleService.getInsuranceTypes().subscribe(data => {
        res(true);
        if(data && data.status == "SUCCESS") {
          this.insuranceTypes = data.data;
        } else {
          if(!data) {
            this.toastCtrl.create({
              showCloseButton: true,
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            }).then(toast => toast.present());
          }
        }
      }, async err => {
        rej(err);
      })
    })
  }

  async changeVehicleName() {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      this.vehicleForm.form1.controls['vehicleColorId'].setValue(null);
      this.vehicleForm.form1.controls['vehicleVariantId'].setValue(null);
      this.vehicleForm.form1.controls['fuelTypeId'].setValue(null);
      this.vehicleForm.form1.controls['registrationNo'].setValue(null);
      this.vehicleForm.form2.controls['wheelTypeId'].setValue(null);
      this.vehicleForm.form2.controls['breakingSystemId'].setValue(null);

      const vehicleNameObject = this.vehicleNames.find(x => x.vehicleNameId === this.vehicleForm.form1.value.vehicleNameId)
      if(vehicleNameObject) {
        this.vehicleBrand = vehicleNameObject.brandName;
        await this.getVehicleType(vehicleNameObject.vehicleTypeId);
        await this.getVehicleColors(vehicleNameObject.vehicleNameId);
        await this.getVehicleVariants(vehicleNameObject.vehicleNameId);
        await this.getVehicleFuelTypes(vehicleNameObject.vehicleNameId);
        await this.getVehicleWheelTypes(vehicleNameObject.vehicleNameId);
        await this.getVehicleBreakingSystems(vehicleNameObject.vehicleNameId);
      }
      loading.dismiss();
    } catch(err) {
      loading.dismiss();
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  form1Submit() {
    this.form1Submitted = true;
    this.checkImagesSelected();
  }
  form2Submit() {
    this.form2Submitted = true;
  }
  form3Submit() {
    this.form3Submitted = true;
    if (this.vehicleForm.form1.valid && this.vehicleForm.form2.valid && this.vehicleForm.form3.valid && this.picturesSelected) {
      const loading = this.loadingCtrl.create();
      loading.then(l => l.present());
      let formData = this.vehicleForm.form1.value;
      Object.assign(formData, this.vehicleForm.form2.value);
      Object.assign(formData, this.vehicleForm.form3.value);
      formData.displayImage = this.displayImage;
      formData.frontImage = this.frontImage;
      formData.backImage = this.backImage;
      formData.leftImage = this.leftImage;
      formData.rightImage = this.rightImage;
      console.log(formData);
      this.addVehicleService.insertAgencyVehicle(formData).subscribe(data => {
        loading.then(l => l.dismiss());
        if(data && data.status == "SUCCESS") {
          this.navCtrl.navigateRoot('/my-vehicle-list');
        } else {
          if(!data) {
            this.toastCtrl.create({
              showCloseButton: true,
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            }).then(toast => toast.present());
          }
        }
      }, async err => {
        loading.then(l => l.dismiss());
        this.toastCtrl.create({
          showCloseButton: true,
          message: 'Connection failed! try again',
          duration: 3000,
          position: 'bottom'
        }).then(toast => toast.present());
      })
    }
  }

  checkImagesSelected() {
    if(!this.displayImage.includes("assets/img") || !this.frontImage.includes("assets/img") || !this.backImage.includes("assets/img") || !this.leftImage.includes("assets/img") || !this.rightImage.includes("assets/img")) {
      if(this.displayImage.includes("assets/img") || this.frontImage.includes("assets/img") || this.backImage.includes("assets/img") || this.leftImage.includes("assets/img") || this.rightImage.includes("assets/img")) {
        this.picturesSelected = false;
      } else {
        this.picturesSelected = true;
      }
    }
  }

  //Calendar Picker
  async openCalendar(field: string) {
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
    const newFormat = moment(event.data.dateObj).format("YYYY-MM-DD");
    this.vehicleForm.form3.controls[field].setValue(newFormat);
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

  async openUploadPhoto() {
    const modal = await this.modalCtrl.create({
      component: UploadVehicle,
      componentProps: {
        "displayImage": this.displayImage,
        "frontImage": this.frontImage,
        "backImage": this.backImage,
        "leftImage": this.leftImage,
        "rightImage": this.rightImage
      }
    });

    modal.onWillDismiss().then((data) => {
      this.displayImage = data.data.displayImage;
      this.frontImage = data.data.frontImage;
      this.backImage = data.data.backImage;
      this.leftImage = data.data.leftImage;
      this.rightImage = data.data.rightImage;
      this.checkImagesSelected()
      this.modelOpened = true;
    });
    return await modal.present();
  }

  previous() {
    this._location.back();
  }
  goToMyVehicles() {
    this.navCtrl.navigateRoot('/my-vehicle-list');
  }
}
