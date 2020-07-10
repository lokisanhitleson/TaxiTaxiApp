import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { RequestVehicleService } from './request-vehicle.service';
import { ToastService } from '../services/toast.service';
import { BrandOfVehicleType } from '../models/vehicle-brand.model';
import { VehicleName } from '../models/vehicle-name.model';

@Component({
  selector: 'vehicle-brand',
  templateUrl: './vehicle.brand.html',
  styleUrls: ['./vehicle.brand.scss'],
})
export class VehicleBrandModal implements OnInit {

  @Input() vehicleTypeId: number;

  isVehicleAvailable = false;
  carModels: any;
  vehicleBrandId: number;
  brands: [BrandOfVehicleType];
  currentBrand: BrandOfVehicleType;
  vehicleNamesAll: VehicleName[];
  vehicleNames: VehicleName[];
  constructor(
    private modalController: ModalController,
    private requestVehicleService: RequestVehicleService,
    private toast: ToastService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getVehicleBrands();
  }
  async cancelModal() {
    this.modalController.dismiss();
  }
  backToBrands() {
    this.vehicleBrandId = undefined;
  }

  filterVehicles(ev: any) {
    this.vehicleNames = this.vehicleNamesAll;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.vehicleNames = this.vehicleNames.filter((car) => {
        return (car.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  getVehicleNamesByBrand() {
    return new Promise((res, rej) => {
      this.requestVehicleService.getVehicleNamesByBrand(this.vehicleBrandId, this.vehicleTypeId).subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          this.vehicleNames = this.vehicleNamesAll = data.data;
        } else {
          this.toast.showToast();
        }
      }, async err => {
        rej(err);
      });
    });
  }
  getVehicleBrands() {
    return new Promise((res, rej) => {
      this.requestVehicleService.getVehicleBrands(this.vehicleTypeId).subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          this.brands = data.data;
        } else {
          this.toast.showToast();
        }
      }, async err => {
        rej(err);
      });
    });
  }

  async onClickBrand(brand: BrandOfVehicleType) {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      this.vehicleBrandId = brand.vehicleBrandId;
      this.currentBrand = brand;
      await this.getVehicleNamesByBrand();
      loading.dismiss();
    } catch (err) {
      loading.dismiss();
      this.toast.showToast();
    }
  }
  async vehicleSelected(vehicle: VehicleName) {
    await this.modalController.dismiss({
      vehicleBrand: this.currentBrand.brandName,
      vehicleTypeId: vehicle.vehicleTypeId,
      vehicleNameId: vehicle.vehicleNameId,
      vehicleName: vehicle.name
    });
  }
}
