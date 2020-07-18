import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, LoadingController, ModalController, IonInfiniteScroll, AlertController } from '@ionic/angular';
import { MyVehicleListService } from './my-vehicle-list.service';
import { AgencyVehicle } from '../models/agency-vehicle.model';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
const n = [
  {
    vehicleName: 'Tata',
    fuelType: 'Petrol'
  }
];
@Component({
  selector: 'app-my-vehicle-list',
  templateUrl: './my-vehicle-list.html',
  styleUrls: ['./my-vehicle-list.scss'],
})
export class MyVehicleList implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public onlineOffline = navigator.onLine;
  mobilenumber: any;
  givenStar = 0;
  newData: [AgencyVehicle];
  errorMessage: string;
  page: number;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  defaultThumbnail = 'assets/img/displayview.jpg';

  constructor(private _location: Location,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private myVehicleListService: MyVehicleListService,
    private toast: ToastService,
    private alertController: AlertController,
    public router: Router,
  ) {

    document.addEventListener('online', () => { this.onlineOffline = true; });
    document.addEventListener('offline', () => { this.onlineOffline = false; });
    (async () => {
      if (this.onlineOffline) {
        await this.getMyVehicles();
      } else {
        this.toast.showToast('No Internet Connection');
      }
    })();
  }

  getMyVehicles() {
    return new Promise((resolve, reject) => {
      this.page = 1;
      this.errorMessage = undefined;
      this.myVehicleListService.getAgencyVehicles({ page: this.page }).subscribe(data => {
        // console.log(data);
        if (data && data.status === 'SUCCESS') {
          this.newData = data.data;
          this.perPage = data.perPage;
          this.totalData = data.totalCount;
          this.totalPage = data.totalPages;
        } else {
          this.errorMessage = 'Failed to load data';
          this.newData = undefined;
        }
        resolve(1);
      }, error => {
        console.log(error);
        this.errorMessage = <any>error;
        this.newData = undefined;
        reject(error);
      });
    });
  }

  loadMoreData(infiniteScroll) {
    this.page = this.page + 1;
    this.myVehicleListService.getAgencyVehicles({ page: this.page })
      .subscribe(
        data => {
          console.log('Async operation has ended');
          infiniteScroll.target.complete();
          if (data && data.status === 'SUCCESS') {
            this.perPage = data.perPage;
            this.totalData = data.totalCount;
            this.totalPage = data.totalPages;
            this.newData.push(...data.data);
            this.errorMessage = undefined;
            if (this.newData.length >= this.totalData) {
              infiniteScroll.target.disabled = true;
            }
          } else {
            this.errorMessage = 'Failed to load data';
          }
        },
        error => {
          console.log('Async operation has ended');
          infiniteScroll.target.complete();
          this.errorMessage = <any>error;
        }
      );
  }

  doRefresh(refresher) {
    this.getMyVehicles().then(data => {
      refresher.target.complete();
    }).catch(err => {
      refresher.target.complete();
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async deleteVehicle(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Remove!',
      message: 'Are you really want to <strong>remove</strong> this vehicle?!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Remove canceled');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            const loading = await this.loadingCtrl.create();
            loading.present();
            this.myVehicleListService.removeAgencyVehicle(this.newData[index].agencyVehicleId)
              .subscribe(
                async data => {
                  loading.dismiss();
                  if (data && data.status === 'SUCCESS') {
                    this.newData.splice(index, 1);
                  } else {
                    this.toast.showToast();
                  }
                }, async err => {
                  loading.dismiss();
                  this.toast.showToast();
                }
              );
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
  }

  viewVehicle(id) {
    this.router.navigate(['/my-vehicle-view', id]);
  }

  previous() {
    this._location.back();
  }

  goAddVehicle() {
    this.navCtrl.navigateRoot('/my-vehicles');
  }
  generateThumbnail(url: string) {
    if (url) {
      const split = url.split('/');
      const last = split.pop();
      const first = split.join('/');
      return `${first}/thumbnails/${last}`;
    } else { return url; }
  }
}
