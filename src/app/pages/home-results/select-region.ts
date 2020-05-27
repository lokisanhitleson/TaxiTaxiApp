import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { HomeResultsService } from './home-results.page.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'select-region',
  templateUrl: './select-region.html',
  styleUrls: ['./select-region.scss'],
})
export class SelectRegionModal implements OnInit {

  isVehicleAvailable = false;
  regionsAll: any[];
  regions: any[];
  keyword: string;
  constructor(
    private modalController: ModalController,
    private homeResultsService: HomeResultsService,
    private toast: ToastService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    // this.getVehicleBrands();
  }
  async cancelModal() {
    this.modalController.dismiss();
  }

  filterRegions(ev: any) {
    this.regions = this.regionsAll;
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.regions = this.regions.filter((car) => {
        return (car.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getRegionsByKeyword(keyword: string) {
    return new Promise((res, rej) => {
      this.homeResultsService.getRegionsByKeyword(keyword).subscribe(data => {
        res(true);
        if (data && data.status == "SUCCESS") {
          this.regions = this.regionsAll = data.data;
        } else {
          this.toast.showToast();
        }
      }, async err => {
        rej(err);
      })
    })
  }

  async onClickBrand(brand) {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      // await this.getVehicleNamesByBrand();
      loading.dismiss();
    } catch(err) {
      loading.dismiss();
      this.toast.showToast();
    }
  }
  async regionSelected(vehicle) {
    await this.modalController.dismiss({
      vehicleBrand: vehicle.brandName,
      vehicleTypeId: vehicle.vehicleTypeId,
      vehicleNameId: vehicle.vehicleNameId,
      vehicleName: vehicle.name
    });
  }
}