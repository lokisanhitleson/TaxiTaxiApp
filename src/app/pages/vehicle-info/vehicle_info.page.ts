import { Component, OnInit } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Location } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Params, ActivatedRoute } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { VehicleInfoService } from './vehicle_info.service';
import { VehicleNameDetails } from '../models/vehicle-name.model';
import { InsuranceAvailableDetails } from '../models/insurance-detail.model';
import { AvailableAgencyDetails } from '../models/agency-vehicle.model';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle_info.page.html',
  styleUrls: ['./vehicle_info.page.scss'],
})
export class VehicleInfo implements OnInit {
  public infoSelector = 'vehicle';
  paramSubscription: Subscription;
  public onlineOffline = navigator.onLine;
  agentDetails: AvailableAgencyDetails;
  vehicleDetails: any;
  vehicleImages: Array<{ img: string }>;

  constructor(private datePicker: DatePicker,
    private _location: Location,
    public translate: TranslateService,
    public translateModule: TranslateModule,
    private route: ActivatedRoute,
    private toast: ToastService,
    private loadingCtrl: LoadingController,
    private vehicleInfoService: VehicleInfoService
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
      }
    );
  }
  async getAgencyVehicleDetails(id: number) {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.vehicleInfoService.getAgencyVehicleDetails(id)
      .subscribe(
        async data => {
          if (data && data.status === 'SUCCESS') {
            this.vehicleDetails = data.data;
            try {
              // Trigger AgencyDetails
              this.getAgencyDetails(data.data.agencyId);
              // Getting Vehicle Name details
              const vehicleNameObj = <VehicleNameDetails>(await this.getVehicleName(data.data.vehicleNameId));
              this.vehicleDetails.vehicleName = vehicleNameObj.name;
              this.vehicleDetails.airBag = vehicleNameObj.airBag === 'Y' ? 'Yes' : 'No';
              // Getting Insurance details
              const insuranceObj = <InsuranceAvailableDetails>(await this.getInsuranceDetail(id));
              Object.assign(this.vehicleDetails, insuranceObj);
              // Getting other all details simultaniously
              const allArr = await Promise.all([this.getVehicleBrand(vehicleNameObj.vehicleBrandId), this.getVehicleType(vehicleNameObj.vehicleTypeId), this.getVehicleColor(data.data.vehicleColorId), this.getVehicleVariant(data.data.vehicleVariantId), this.getVehicleFuelType(data.data.fuelTypeId), this.getVehicleWheelType(data.data.wheelTypeId), this.getVehicleBrakingSystem(data.data.brakingSystemId), this.getVehicleCondition(data.data.vehicleConditionId)]);
              this.vehicleDetails.brandName = allArr[0];
              this.vehicleDetails.vehicleType = allArr[1];
              this.vehicleDetails.vehicleColor = allArr[2];
              this.vehicleDetails.vehicleVariant = allArr[3];
              this.vehicleDetails.fuelType = allArr[4];
              this.vehicleDetails.wheelType = allArr[5];
              this.vehicleDetails.brakingSystem = allArr[6];
              this.vehicleDetails.vehicleCondition = allArr[7];

              // Checking images
              if (this.vehicleDetails.displayImage) { if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleDetails.displayImage }); } else { this.vehicleImages = [{ img: this.vehicleDetails.displayImage }]; } }
              if (this.vehicleDetails.frontImage) { if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleDetails.frontImage }); } else { this.vehicleImages = [{ img: this.vehicleDetails.frontImage }]; } }
              if (this.vehicleDetails.backImage) { if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleDetails.backImage }); } else { this.vehicleImages = [{ img: this.vehicleDetails.backImage }]; } }
              if (this.vehicleDetails.leftImage) { if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleDetails.leftImage }); } else { this.vehicleImages = [{ img: this.vehicleDetails.leftImage }]; } }
              if (this.vehicleDetails.rightImage) { if (this.vehicleImages) { this.vehicleImages.push({ img: this.vehicleDetails.rightImage }); } else { this.vehicleImages = [{ img: this.vehicleDetails.rightImage }]; } }

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
  getAgencyDetails(agencyId: number) {
    this.vehicleInfoService.getAgencyDetails(agencyId).subscribe(
      async data => {
        if (data && data.status === 'SUCCESS') {
          this.agentDetails = data.data;
        }
      }
    );
  }
  getVehicleName(vehicleNameId: number) {
    return new Promise((resolve, reject) => {
      this.vehicleInfoService.getVehicleName(vehicleNameId)
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
      this.vehicleInfoService.getInsuranceDetail(agencyVehicleId)
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
      this.vehicleInfoService.getVehicleBrand(vehicleBrandId)
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
      this.vehicleInfoService.getVehicleType(vehicleTypeId).subscribe(data => {
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
      this.vehicleInfoService.getVehicleColor(vehicleColorId).subscribe(data => {
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
      this.vehicleInfoService.getVehicleVariant(vehicleVariantId).subscribe(data => {
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
      this.vehicleInfoService.getVehicleFuelType(vehicleFuelTypeId).subscribe(data => {
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
      this.vehicleInfoService.getVehicleWheelType(vehicleWheelTypeId).subscribe(data => {
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
      this.vehicleInfoService.getVehicleBrakingSystem(vehicleBrakingSystemId).subscribe(data => {
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
      this.vehicleInfoService.getVehicleCondition(vehicleConditionId).subscribe(data => {
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
  slidesDidLoad(slides: IonSlides) {
    slides.stopAutoplay();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  previous() {
    this._location.back();
  }
}
