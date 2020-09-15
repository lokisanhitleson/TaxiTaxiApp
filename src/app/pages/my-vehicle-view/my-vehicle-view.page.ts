import { Component, OnInit } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Location } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MyVehicleViewService } from './my-vehicle-view.service';
import { ToastService } from '../services/toast.service';
import { VehicleNameDetails } from '../models/vehicle-name.model';
import { InsuranceDetails } from '../models/insurance-detail.model';

@Component({
  selector: 'app-my-vehicle-view',
  templateUrl: './my-vehicle-view.page.html',
  styleUrls: ['./my-vehicle-view.page.scss'],
})
export class MyVehicleViewPage implements OnInit {
  myDate: string;
  myTime: string;
  myDateNTime: string;
  paramSubscription: Subscription;
  public onlineOffline = navigator.onLine;
  displayImage = 'assets/img/displayview.jpg';
  frontImage = 'assets/img/frontview.jpg';
  backImage = 'assets/img/backview.jpg';
  leftImage = 'assets/img/leftview.jpg';
  rightImage = 'assets/img/rightview.jpg';
  vehicleImages: Array<{ img: string }>;
  vehicleInfo: any;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private datePicker: DatePicker,
    private route: ActivatedRoute,
    private _location: Location,
    public translate: TranslateService,
    public translateModule: TranslateModule,
    private loadingCtrl: LoadingController,
    private myVehicleViewService: MyVehicleViewService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    document.addEventListener('online', () => { this.onlineOffline = true; });
    document.addEventListener('offline', () => { this.onlineOffline = false; });

    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        if (this.onlineOffline) {
          this.getAgencyVehicleDetails(params['agencyVehicleId']);
        } else {
          this.toast.showToast('No Internet Connection');
        }
      });
  }

  async getAgencyVehicleDetails(id: number) {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.myVehicleViewService.getAgencyVehicleDetails(id)
      .subscribe(
        async data => {
          if (data && data.status === 'SUCCESS') {
            this.vehicleInfo = data.data;
            try {
              // Getting Vehicle Name details
              const vehicleNameObj = <VehicleNameDetails>(await this.getVehicleName(data.data.vehicleNameId));
              this.vehicleInfo.vehicleName = vehicleNameObj.name;
              this.vehicleInfo.airBag = vehicleNameObj.airBag === 'Y' ? 'Yes' : 'No';
              // Getting Insurance details
              const insuranceObj = <InsuranceDetails>(await this.getInsuranceDetail(id));
              Object.assign(this.vehicleInfo, insuranceObj);
              // Getting other all details simultaniously
              const allArr = await Promise.all([this.getVehicleBrand(vehicleNameObj.vehicleBrandId), this.getVehicleType(vehicleNameObj.vehicleTypeId), this.getVehicleColor(data.data.vehicleColorId), this.getVehicleVariant(data.data.vehicleVariantId), this.getVehicleFuelType(data.data.fuelTypeId), this.getVehicleWheelType(data.data.wheelTypeId), this.getVehicleBrakingSystem(data.data.brakingSystemId), this.getVehicleCondition(data.data.vehicleConditionId), this.getInsuranceCompany(insuranceObj.insuranceCompanyId), this.getInsuranceType(insuranceObj.insuranceTypeId)]);
              this.vehicleInfo.brandName = allArr[0];
              this.vehicleInfo.vehicleType = allArr[1];
              this.vehicleInfo.vehicleColor = allArr[2];
              this.vehicleInfo.vehicleVariant = allArr[3];
              this.vehicleInfo.fuelType = allArr[4];
              this.vehicleInfo.wheelType = allArr[5];
              this.vehicleInfo.brakingSystem = allArr[6];
              this.vehicleInfo.vehicleCondition = allArr[7];
              this.vehicleInfo.insuranceCompany = allArr[8];
              this.vehicleInfo.insuranceType = allArr[9];

              if (this.vehicleInfo.displayImage == null || this.vehicleInfo.displayImage == undefined ) {               
                this.displayImage = 'assets/img/displayview.jpg';  
                console.log(this.vehicleInfo.displayImage,"null");
              }
              else{
                console.log(this.vehicleInfo.displayImage,"notnull");
                if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleInfo.displayImage }); } else { this.vehicleImages = [{ img: this.vehicleInfo.displayImage }]; } 

         
              }
              if (this.vehicleInfo.frontImage || this.vehicleInfo.frontImage == undefined) { 
                this.frontImage = 'assets/img/frontview.jpg';
              }else{
                if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleInfo.frontImage }); } else { this.vehicleImages = [{ img: this.vehicleInfo.frontImage }]; }

               }
              if (this.vehicleInfo.backImage|| this.vehicleInfo.backImage == undefined) 
              {  this.backImage = 'assets/img/backview.jpg';            }
              else{
                if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleInfo.backImage }); } else { this.vehicleImages = [{ img: this.vehicleInfo.backImage }]; } 
             
              }
              if (this.vehicleInfo.leftImage|| this.vehicleInfo.leftImage == undefined) 
              {
                 
                 this.leftImage = 'assets/img/leftview.jpg';
              }
              else{
                if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleInfo.leftImage }); } else { this.vehicleImages = [{ img: this.vehicleInfo.leftImage }]; } 
              }
              if (this.vehicleInfo.rightImage|| this.vehicleInfo.rightImage == undefined) {
                this.rightImage = 'assets/img/rightview.jpg';
              }
              else{
                if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleInfo.rightImage }); } else { this.vehicleImages = [{ img: this.vehicleInfo.rightImage }]; } 
              }
              loading.dismiss();
            } catch (err) {
              loading.dismiss();
              this.toast.showToast(err);
            }
          } else {
            loading.dismiss();
            this.toast.showToast();
          }
        }, async err => {
          loading.dismiss();
          this.toast.showToast();
        }
      );
  }
  getVehicleName(vehicleNameId: number) {
    return new Promise((resolve, reject) => {
      this.myVehicleViewService.getVehicleName(vehicleNameId)
        .subscribe(
          async data => {
            if (data && data.status === 'SUCCESS') {
              resolve(data.data);
            } else {
              reject(1);
              this.toast.showToast();
            }
          }, async err => {
            reject(1);
            this.toast.showToast();
          }
        );
    });
  }
  getInsuranceDetail(agencyVehicleId: number) {
    return new Promise((resolve, reject) => {
      this.myVehicleViewService.getInsuranceDetail(agencyVehicleId)
        .subscribe(
          async data => {
            if (data && data.status === 'SUCCESS') {
              resolve(data.data);
            } else {
              reject(1);
              this.toast.showToast();
            }
          }, async err => {
            reject(1);
            this.toast.showToast();
          }
        );
    });
  }
  getVehicleBrand(vehicleBrandId: number) {
    return new Promise((resolve, reject) => {
      this.myVehicleViewService.getVehicleBrand(vehicleBrandId)
        .subscribe(
          async data => {
            if (data && data.status === 'SUCCESS') {
              resolve(data.data.brandName);
            } else {
              reject(1);
              this.toast.showToast();
            }
          }, async err => {
            reject(1);
            this.toast.showToast();
          }
        );
    });
  }
  getVehicleType(vehicleTypeId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleType(vehicleTypeId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.type) {
          res(data.data.type);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleColor(vehicleColorId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleColor(vehicleColorId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.color) {
          res(data.data.color);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleVariant(vehicleVariantId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleVariant(vehicleVariantId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.variant) {
          res(data.data.variant);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleFuelType(vehicleFuelTypeId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleFuelType(vehicleFuelTypeId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.type) {
          res(data.data.type);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleWheelType(vehicleWheelTypeId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleWheelType(vehicleWheelTypeId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.type) {
          res(data.data.type);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleBrakingSystem(vehicleBrakingSystemId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleBrakingSystem(vehicleBrakingSystemId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.name) {
          res(data.data.name);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleCondition(vehicleConditionId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getVehicleCondition(vehicleConditionId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.condition) {
          res(data.data.condition);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getInsuranceCompany(insuranceCompanyId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getInsuranceCompany(insuranceCompanyId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.name) {
          res(data.data.name);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getInsuranceType(insuranceTypeId: number) {
    return new Promise((res, rej) => {
      this.myVehicleViewService.getInsuranceType(insuranceTypeId).subscribe(data => {
        if (data && data.status === 'SUCCESS' && data.data.type) {
          res(data.data.type);
        } else {
          rej(true);
        }
      }, async err => {
        rej(err);
      });
    });
  }

  showDatepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText: 'Save Date',
      todayText: 'Set Today'
    }).then(
      date => {
        this.myDate = date.getDate() + '/' + date.toLocaleString('default', { month: 'long' }) + '/' + date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  showTimepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      okText: 'Save Time',
      nowText: 'Set Now'
    }).then(
      time => {
        this.myTime = time.getHours() + ':' + time.getMinutes();
      },
      err => console.log('Error occurred while getting time: ', err)
    );
  }

  showDateTimepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL,
      doneButtonLabel: 'Save Date & Time',
      is24Hour: false
    }).then(
      dateTime => {
        this.myDateNTime = dateTime.getDate() + '/' + dateTime.toLocaleString('default', { month: 'long' }) + '/' + dateTime.getFullYear() + ' ' + dateTime.getHours() + ':' + dateTime.getMinutes();
      },
      err => console.log('Error occurred while getting dateTime: ', err)
    );
  }

  slidesDidLoad(slides: IonSlides) {
    slides.stopAutoplay();
  }


  previous() {
    this._location.back();
  }
}
