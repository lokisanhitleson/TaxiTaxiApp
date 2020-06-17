import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, LoadingController, ModalController } from '@ionic/angular';
import { RatingModalPage } from '../../pages/modal/rating-modal/rating-modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DateService } from '../services/date.service';
import { CarsService } from './cars.service';
import { Storage } from '@ionic/storage';
import { ToastService } from '../services/toast.service';
import { AvailableVehicle } from '../models/agency-vehicle.model';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
import * as moment from 'moment';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  public onlineOffline = navigator.onLine;
  mobilenumber: any;
  givenStar = 0;
  today: string;
  data: any;
  paramSubscription: Subscription;
  vehicleTypeId: number;
  searchDate: string;
  location: { region: string, latitude: number, longitude: number };
  newData: [AvailableVehicle];
  showData: AvailableVehicle[];
  errorMessage: string;
  page: number;
  perPage = 10;
  totalData = 0;
  totalPage = 0;
  constructor(private _location: Location,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    public route: ActivatedRoute,
    public router: Router,
    public translateModule: TranslateModule,
    public dateService: DateService,
    private carsService: CarsService,
    private storage: Storage,
    private toast: ToastService
  ) {
    document.addEventListener('online', () => { this.onlineOffline = true; });
    document.addEventListener('offline', () => { this.onlineOffline = false; });
    if (!this.onlineOffline) {
      this.toast.showToast('No Internet Connection');
    }
  }

  cars = [
    { carname: 'Toyota Innova', agentname: 'R Satheesh Kumar', location: 'Chennai', seater: '7 Seater', fuel: 'Diesel', mobilenumber: '9884420042', img: 'assets/img/innova.jpg' },
    { carname: 'Indica v2', agentname: 'S Mahalingam', location: 'Avadi', seater: '4 Seater', fuel: 'Petrol', mobilenumber: '8754491205', img: 'assets/img/indica-v2.jpg' },
    { carname: 'Xylo', agentname: 'A Paneer Selvam', location: 'Tambaram', seater: '7 Seater', fuel: 'Diesel', mobilenumber: '8988756523', img: 'assets/img/xylo.jpg' },
    { carname: 'Ford Figo', agentname: 'P Yogaraj', location: 'Porur', seater: '4 Seater', fuel: 'Diesel', mobilenumber: '8798875679', img: 'assets/img/figo.jpg' },
    { carname: 'Hyundai i10', agentname: 'M Rajesh Kumar', location: 'T.Nagar', seater: '4 Petrol', fuel: 'Diesel', mobilenumber: '998875659', img: 'assets/img/i10.jpg' }
  ];
  openWhatsApp(mob) {
    window.open(`https://api.whatsapp.com/send?phone=${mob}`);
  }

  async ngOnInit() {
    try {
      this.location = await this.storage.get('currentLocation');
      this.paramSubscription = this.route.params.subscribe(
        async (params: Params) => {
          this.vehicleTypeId = params['vehicleTypeId'];
          const l = await this.loadingCtrl.create();
          l.present();
          this.getCurrentDate();
          await this.getAvailableVehicles();
          this.loadInitial();
          l.dismiss();
        }
      );
    } catch (err) {
      console.log('something went wrong: ', err);
    }
  }
  getCurrentDate() {
    this.searchDate = this.dateService.Date_toYMD();
  }

  getAvailableVehicles() {
    return new Promise((resolve, reject) => {
      const data = { vehicleTypeId: this.vehicleTypeId, latitude: this.location.latitude, longitude: this.location.longitude, searchDate: this.searchDate, page: this.page };
      this.carsService.getAvailableAgencyVehicles(data).subscribe(d => {
        if (d && d.status === 'SUCCESS') {
          this.newData = d.data;
        } else {
          this.newData = undefined;
        }
        resolve(1);
      }, error => {
        console.log(error);
        this.newData = undefined;
        reject(error);
      });
    });
  }
  loadInitial() {
    this.page = 1;
    const data = { vehicleTypeId: this.vehicleTypeId, latitude: this.location.latitude, longitude: this.location.longitude, searchDate: this.searchDate, page: this.page };
    this.errorMessage = undefined;
    if (this.newData && this.newData.length > 0) {
      this.totalData = this.newData.length;
      this.totalPage = Math.ceil(this.newData.length / this.perPage);
      this.showData = this.loadPartial();
    } else {
      this.errorMessage = 'Sorry, No vehicles for this location';
      this.newData = undefined;
    }
  }
  loadMoreData(infiniteScroll) {
    if (this.showData.length >= this.totalData) {
      infiniteScroll.target.disabled = true;
    }
    this.page = this.page + 1;
    this.showData.push(...this.loadPartial());
    if (this.showData.length >= this.totalData) {
      infiniteScroll.target.disabled = true;
    }
  }
  loadPartial() {
    const start = this.perPage * (Number(this.page) - 1);
    const end = this.perPage + start;
    return this.newData.slice(start, end);
  }
  doRefresh(refresher) {
    this.getAvailableVehicles().then(data => {
      this.loadInitial();
      refresher.target.complete();
    }).catch(err => {
      refresher.target.complete();
    });
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
  async openRating() {
    const modal = await this.modalCtrl.create({
      component: RatingModalPage,
      cssClass: 'rating-modal-css'
    });
    modal.onDidDismiss().then((givenStar) => {
      if (givenStar !== null) {
        this.givenStar = givenStar.data;
      }
    });

    return await modal.present();
  }


  generateThumbnail(url: string) {
    if (url) {
      const split = url.split('/');
      const last = split.pop();
      const first = split.join('/');
      return `${first}/thumbnails/${last}`;
    } else { return url; }
  }

  // Calendar Picker
  async openCalendar() {
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
    this.today = newFormat; // to show date to users
    this.searchDate = newFormat; // to send date to database
    // Load vehicles
    const l = await this.loadingCtrl.create();
    l.present();
    this.getCurrentDate();
    await this.getAvailableVehicles();
    this.loadInitial();
    l.dismiss();
  }

  viewVehicle(id) {
    this.router.navigate(['home', 'tabs', 'vehicle-info', id]);
  }
  toVehicleInfo() {
    this.navCtrl.navigateRoot('/home/tabs/vehicle-info');
  }
  previous() {
    this._location.back();
  }
}
