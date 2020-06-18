import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { AddVehicleService } from './add-vehicle.service';
import { ToastService } from '../services/toast.service';
import { AgencyVehicleSelect } from '../models/agency-vehicle.model';

@Component({
  selector: 'vehicle-select-schedule',
  templateUrl: './vehicle-select.html',
  styleUrls: ['./vehicle-select.scss'],
})
export class VehicleSelectModal implements OnInit {

  isVehicleAvailable = false;
  vehicleNamesAll: AgencyVehicleSelect[];
  vehicleNames: AgencyVehicleSelect[];
  constructor(
    private modalController: ModalController,
    private addVehicleService: AddVehicleService,
    private toast: ToastService,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    const l = await this.loadingCtrl.create();
    l.present();
    await this.getAgencyVehicles();
    l.dismiss();
  }

  async cancelModal() {
    this.modalController.dismiss();
  }

  filterVehicles(ev: any) {
    this.vehicleNames = this.vehicleNamesAll;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.vehicleNames = this.vehicleNames.filter((car) => {
        return ((car.brandName.toLowerCase() + ' ' + car.vehicleName.toLowerCase()).indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  getAgencyVehicles() {
    return new Promise((res, rej) => {
      this.addVehicleService.getAgencyVehicles().subscribe(data => {
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

  async vehicleSelected(vehicle: AgencyVehicleSelect) {
    await this.modalController.dismiss({
      vehicleBrand: vehicle.brandName,
      vehicleName: vehicle.vehicleName,
      agencyVehicleId: vehicle.agencyVehicleId
    });
  }
}
