import { Component, OnInit } from '@angular/core';
import { CalendarModal, CalendarComponentOptions, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController, LoadingController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import * as moment from 'moment';
import { VehicleSelectModal } from './vehicle-select';
import { AddVehicleService } from './add-vehicle.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {
  bookedDates: string[];
  agencyVehicleId: number;
  vehicleBrand: string;
  vehicleName: string;

  constructor(
    public modalCtrl: ModalController,
    private _location: Location,
    public translate: TranslateService,
    public translateModule: TranslateModule,
    private addVehicleService: AddVehicleService,
    private toast: ToastService,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) { }

  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  carModels = [
    'Toyota Platinum Etios',
    'Maruti Suzuki Dzire',
    'Renault Lodgy',
    'Mahindra Scorpio',
    'Toyota Innova Crysta',
    'Hyundai Xcent',
    'Nissan Sunny'
  ];
  carType = ['Mini', 'Micro', 'Prime'];

  ngOnInit() {
  }

  async openSelectVehicle() {
    const modal = await this.modalCtrl.create({
      component: VehicleSelectModal
    });

    modal.onWillDismiss().then((data) => {
      if (data.data) {
        this.agencyVehicleId = data.data.agencyVehicleId;
        this.vehicleBrand = data.data.vehicleBrand;
        this.vehicleName = data.data.vehicleName;
        this.vehicleChanged();
      }
    });
    return await modal.present();
  }
  vehicleChanged() {
    return new Promise((res, rej) => {
      this.addVehicleService.getBookedDates(this.agencyVehicleId).subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          if (data.data.length > 0) {
            this.bookedDates = data.data.map(x => x.date);
          } else {
            this.bookedDates = [];
          }
        } else {
          this.toast.showToast();
          this.bookedDates = [];
        }
      }, async err => {
        rej(err);
      });
    });
  }
  onCalendarSelect($event) {
  }
  updateBookings() {
    if (this.agencyVehicleId) {
      const loading = this.loadingCtrl.create();
      loading.then(l => l.present());
      const saveData = {
        agencyVehicleId: this.agencyVehicleId,
        dates: this.bookedDates.map(x => moment(x).format('YYYY-MM-DD'))
      };
      this.addVehicleService.saveBookings(saveData).subscribe(data => {
        loading.then(l => l.dismiss());
        if (data && data.status === 'SUCCESS') {
          this.toast.showToast('Saved Successfully!');
        } else {
          this.toast.showToast();
        }
      }, async err => {
        loading.then(l => l.dismiss());
        this.toast.showToast();
      });
    } else {
      this.toast.showToast('Plaese select your vehicle');
    }
  }
  previous() {
    this._location.back();
  }

}
