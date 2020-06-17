import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/Camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
import * as moment from 'moment';
import { BrakingSystemOfVehicle } from '../models/braking-system.model';
import { FuelTypeOfVehicle } from '../models/fuel-type.model';
import { InsuranceCompany } from '../models/insurance-company.model';
import { InsuranceType } from '../models/insurance-type.model';
import { ColorOfVehicle } from '../models/vehicle-color.model';
import { VehicleCondition } from '../models/vehicle-condition.model';
import { VariantOfVehicle } from '../models/vehicle-variant.model';
import { WheelTypeOfVehicle } from '../models/wheel-type.model';
import { ToastService } from '../services/toast.service';
import { AddVehicleService } from './add-vehicle.service';
import { UploadVehicle } from './upload-vehicle';
import { VehicleBrandModal } from './vehicle.brand';


@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.page.html',
  styleUrls: ['./my-vehicles.page.scss'],
})
export class MyVehiclesPage implements OnInit {
  daterange: string;
  prevShow = true;

  croppedImagepath = 'assets/no-image.png';
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
  modelOpenedBrand: boolean;
  vehicleSelected: boolean;
  vehicleBrand: string;
  vehicleTypeId: number;
  vehicleType: string;
  vehicleColors: [ColorOfVehicle];
  years: [number];
  yearsFc: [number];
  vehicleVariants: [VariantOfVehicle];
  vehicleFuelTypes: [FuelTypeOfVehicle];
  vehicleConditions: [VehicleCondition];
  vehicleWheelTypes: [WheelTypeOfVehicle];
  vehicleBrakingSystems: [BrakingSystemOfVehicle];
  insuranceTypes: [InsuranceType];
  insuranceCompanies: [InsuranceCompany];

  displayImage = 'assets/img/displayview.jpg';
  frontImage = 'assets/img/frontview.jpg';
  backImage = 'assets/img/backview.jpg';
  leftImage = 'assets/img/leftview.jpg';
  rightImage = 'assets/img/rightview.jpg';
  vehicleNameIdPrev: number;
  vehicleNameId: number;
  vehicleName: string;

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
    private toast: ToastService,
    public translate: TranslateService,
    public translateModule: TranslateModule,
    private addVehicleService: AddVehicleService,
    private formBuilder: FormBuilder
  ) {
    this.vehicleForm = {
      form1: this.createForm1(),
      form2: this.createForm2(),
      form3: this.createForm3()
    };
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      this.loadYears();
      this.loadYearsFc();
      await this.getInsuranceCompanies();
      await this.getInsuranceTypes();
      await this.getVehicleConditions();
      loading.dismiss();
    } catch (err) {
      loading.dismiss();
      this.toast.showToast();
    }
  }

  createForm1(): FormGroup {
    return this.formBuilder.group({
      registrationNo: ['', Validators.required],
      vehicleColorId: ['', Validators.required],
      manufactureYear: ['', Validators.required],
      vehicleVariantId: ['', Validators.required],
      fuelTypeId: ['', Validators.required]
    });
  }
  createForm2(): FormGroup {
    return this.formBuilder.group({
      // vehicleConditionId: ['', Validators.required],
      accidentHistory: ['', Validators.required],
      chassisNo: [''],
      fcYear: ['', Validators.required],
      airBag: ['', Validators.required],
      wheelTypeId: ['', Validators.required],
      brakingSystemId: ['', Validators.required]
    });
  }
  createForm3(): FormGroup {
    return this.formBuilder.group({
      insuranceTypeId: ['', Validators.required],
      insuranceCompanyId: ['', Validators.required],
      insuranceNo: ['', Validators.required],
      // startDate: ['', Validators.required],
      expiryDate: ['', Validators.required]
    });
  }

  loadYears() {
    const count = 20;
    const year = new Date().getFullYear();
    for (let i = year - count; i <= year; i++) {
      if (this.years) { this.years.push(i); } else { this.years = [i]; }
    }
  }

  loadYearsFc() {
    const count = 10;
    const year = new Date().getFullYear();
    for (let i = year; i <= year + count; i++) {
      if (this.yearsFc) { this.yearsFc.push(i); } else { this.yearsFc = [i]; }
    }
  }

  getVehicleType(vehicleTypeId: number) {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleType(vehicleTypeId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.type) {
          this.vehicleType = data.data.type;
          res(true);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getVehicleColors(vehicleNameId: number) {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleColors(vehicleNameId).subscribe(data => {
        if (data && data.status === 'SUCCESS') {
          res(true);
          this.vehicleColors = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getVehicleVariants(vehicleNameId: number) {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleVariants(vehicleNameId).subscribe(data => {
        if (data && data.status === 'SUCCESS') {
          res(true);
          this.vehicleVariants = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getVehicleFuelTypes(vehicleNameId: number) {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleFuelTypes(vehicleNameId).subscribe(data => {
        if (data && data.status === 'SUCCESS') {
          res(true);
          this.vehicleFuelTypes = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getVehicleConditions() {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleConditions().subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          this.vehicleConditions = data.data;
        } else {
          if (!data) {
            this.toast.showToast();
          }
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getVehicleWheelTypes(vehicleNameId: number) {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleWheelTypes(vehicleNameId).subscribe(data => {
        if (data && data.status === 'SUCCESS') {
          res(true);
          this.vehicleWheelTypes = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getVehicleBrakingSystems(vehicleNameId: number) {
    return new Promise((res, rej) => {
      this.addVehicleService.getVehicleBrakingSystems(vehicleNameId).subscribe(data => {
        if (data && data.status === 'SUCCESS') {
          res(true);
          this.vehicleBrakingSystems = data.data;
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getInsuranceCompanies() {
    return new Promise((res, rej) => {
      this.addVehicleService.getInsuranceCompanies().subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          this.insuranceCompanies = data.data;
        } else {
          if (!data) {
            this.toast.showToast();
          }
        }
      }, async err => {
        rej(err);
      });
    });
  }

  getInsuranceTypes() {
    return new Promise((res, rej) => {
      this.addVehicleService.getInsuranceTypes().subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          this.insuranceTypes = data.data;
        } else {
          if (!data) {
            this.toast.showToast();
          }
        }
      }, async err => {
        rej(err);
      });
    });
  }

  async changeVehicleName(vehicleTypeId: number, vehicleNameId: number) {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      this.vehicleForm.form1.controls['vehicleColorId'].setValue(null);
      this.vehicleForm.form1.controls['vehicleVariantId'].setValue(null);
      this.vehicleForm.form1.controls['fuelTypeId'].setValue(null);
      this.vehicleForm.form1.controls['registrationNo'].setValue(null);
      this.vehicleForm.form2.controls['wheelTypeId'].setValue(null);
      this.vehicleForm.form2.controls['brakingSystemId'].setValue(null);

      await this.getVehicleType(vehicleTypeId);
      await this.getVehicleColors(vehicleNameId);
      await this.getVehicleVariants(vehicleNameId);
      await this.getVehicleFuelTypes(vehicleNameId);
      await this.getVehicleWheelTypes(vehicleNameId);
      await this.getVehicleBrakingSystems(vehicleNameId);
      loading.dismiss();
    } catch (err) {
      loading.dismiss();
      this.toast.showToast();
    }
  }

  form1Submit() {
    this.form1Submitted = true;
    this.checkImagesSelected();
    this.checkVehicleSelected();
  }
  form2Submit() {
    this.form2Submitted = true;
  }
  form3Submit() {
    this.form3Submitted = true;
    // if (this.vehicleForm.form1.valid && this.vehicleForm.form2.valid && this.vehicleForm.form3.valid && this.picturesSelected) {
    if (this.vehicleForm.form1.valid && this.vehicleForm.form2.valid && this.vehicleForm.form3.valid) {
      const loading = this.loadingCtrl.create();
      loading.then(l => l.present());
      const formData = this.vehicleForm.form1.value;
      Object.assign(formData, this.vehicleForm.form2.value);
      Object.assign(formData, this.vehicleForm.form3.value);
      formData.displayImage = this.displayImage.includes('assets/img') ? null : this.displayImage;
      formData.frontImage = this.frontImage.includes('assets/img') ? null : this.frontImage;
      formData.backImage = this.backImage.includes('assets/img') ? null : this.backImage;
      formData.leftImage = this.leftImage.includes('assets/img') ? null : this.leftImage;
      formData.rightImage = this.rightImage.includes('assets/img') ? null : this.rightImage;
      formData.vehicleNameId = this.vehicleNameId;
      formData.vehicleConditionId = (new Date().getFullYear() - this.vehicleForm.form1.value.manufactureYear) > 4 ? 1 : 2;
      console.log(formData);
      this.addVehicleService.insertAgencyVehicle(formData).subscribe(data => {
        loading.then(l => l.dismiss());
        if (data && data.status === 'SUCCESS') {
          this.navCtrl.navigateRoot('/my-vehicle-list');
        } else {
          if (!data) {
            this.toast.showToast();
          }
        }
      }, async err => {
        loading.then(l => l.dismiss());
        this.toast.showToast();
      });
    }
  }

  checkImagesSelected() {
    if (!this.displayImage.includes('assets/img') || !this.frontImage.includes('assets/img') || !this.backImage.includes('assets/img') || !this.leftImage.includes('assets/img') || !this.rightImage.includes('assets/img')) {
      if (this.displayImage.includes('assets/img') || this.frontImage.includes('assets/img') || this.backImage.includes('assets/img') || this.leftImage.includes('assets/img') || this.rightImage.includes('assets/img')) {
        this.picturesSelected = false;
      } else {
        this.picturesSelected = true;
      }
    }
  }
  checkVehicleSelected() {
    if (this.vehicleNameId) {
      this.vehicleSelected = true;
      if (this.vehicleNameIdPrev !== this.vehicleNameId) {
        this.changeVehicleName(this.vehicleTypeId, this.vehicleNameId);
        this.vehicleNameIdPrev = this.vehicleNameId;
      }
    } else {
      this.vehicleSelected = false;
    }
  }

  // Calendar Picker
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
    const newFormat = moment(event.data.dateObj).format('YYYY-MM-DD');
    this.vehicleForm.form3.controls[field].setValue(newFormat);
  }

  async openUploadPhoto() {
    const modal = await this.modalCtrl.create({
      component: UploadVehicle,
      componentProps: {
        'displayImage': this.displayImage,
        'frontImage': this.frontImage,
        'backImage': this.backImage,
        'leftImage': this.leftImage,
        'rightImage': this.rightImage
      }
    });

    modal.onWillDismiss().then((data) => {
      this.displayImage = data.data.displayImage;
      this.frontImage = data.data.frontImage;
      this.backImage = data.data.backImage;
      this.leftImage = data.data.leftImage;
      this.rightImage = data.data.rightImage;
      this.checkImagesSelected();
      this.modelOpened = true;
    });
    return await modal.present();
  }

  async openSelectBrand() {
    const modal = await this.modalCtrl.create({
      component: VehicleBrandModal,
      componentProps: {
        'vehicleBrand': this.vehicleBrand,
        'vehicleTypeId': this.vehicleTypeId,
        'vehicleNameId': this.vehicleNameId,
        'vehicleName': this.vehicleName
      }
    });

    modal.onWillDismiss().then((data) => {
      if (data.data) {
        this.vehicleBrand = data.data.vehicleBrand;
        this.vehicleTypeId = data.data.vehicleTypeId;
        this.vehicleNameId = data.data.vehicleNameId;
        this.vehicleName = data.data.vehicleName;
      }
      this.checkVehicleSelected();
      this.modelOpenedBrand = true;
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
