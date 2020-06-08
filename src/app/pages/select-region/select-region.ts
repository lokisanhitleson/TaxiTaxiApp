import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeResultsService } from '../home-results/home-results.page.service';
import { ToastService } from '../services/toast.service';
import { Place } from '../models/places.model';

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
    private toast: ToastService
  ) { }

  ngOnInit() { }

  async cancelModal() {
    this.modalController.dismiss();
  }

  filterRegions(ev: any) {
    this.regions = this.regionsAll;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.getRegionsByKeyword(val);
      // this.getRegionsByKeyword(val);
    } else { this.regions = []; }
  }

  getRegionsByKeyword(keyword: string) {
    return new Promise((res, rej) => {
      this.homeResultsService.getRegionsByKeyword(keyword).subscribe(data => {
        res(true);
        if (data && data.status === 'SUCCESS') {
          this.regions = this.regionsAll = data.data;
        } else {
          this.toast.showToast();
        }
      }, async err => {
        rej(err);
      });
    });
  }

  async regionSelected(vehicle: Place) {
    await this.modalController.dismiss({
      placeName: vehicle.placeName,
      placeId: vehicle.eLoc,
      latitude: vehicle.latitude,
      longitude: vehicle.longitude
    });
  }
}
