import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonSlides, LoadingController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomeResultsService } from './home-results.page.service';
import { vechicleTypes } from '../../models/VechileTypesmodel';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { SelectRegionModal } from '../select-region/select-region';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage implements OnInit {
  // themeCover = [
  //   {car:'assets/svg/car.svg'},
  //   {car1:'assets/svg/car1.svg'},
  // ];
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public translate: TranslateService,
    public homeResultsService: HomeResultsService,
    public translateModule: TranslateModule,
    private storage: Storage
  ) {
    this.vechileTypes();

    // this.lang = 'en';
    // this.translate.setDefaultLang('en');
    // this.translate.use('en');
  }
  searchKey = '';
  yourLocation: string;
  placeId: string;
  lang: any;
  isAnnouncement = false;
  vehicles: [vechicleTypes];

  ads = [
    { img: 'assets/img/announce1.jpg' },
    { img: 'assets/img/announce2.jpg' }
  ];
  announcement = [
    { img: 'assets/img/ad1.jpg' },
    { img: 'assets/img/ad2.jpg' }
  ];
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  async ngOnInit() {
    try {
      const uData = await this.storage.get('userData');
      this.yourLocation = uData.agencyRegion;
      this.placeId = uData.placeId;
    } catch (err) {
      console.log('something went wrong: ', err);
    }
  }
  // switch Language() {
  //   this.translate.use(this.lang);
  // }
  vechileTypes() {
    this.homeResultsService.getVechileTypes().subscribe(data => {
      if (data && data.status === 'SUCCESS') {
        console.log(data, 'datas');
        this.vehicles = data.data;
      } else {
        console.log(null + 's');
        console.log(data + 'datas');

      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      // message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top'
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }
  async openSelectRegion() {
    const modal = await this.modalCtrl.create({
      component: SelectRegionModal
    });

    modal.onWillDismiss().then((data) => {
      if (data.data) {
        this.yourLocation = data.data.placeName;
        this.placeId = data.data.placeId;
      }
    });
    return await modal.present();
  }
  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  goToCars(vehicleTypeId: number) {
    this.presentLoading();
    // this.navCtrl.navigateRoot('/home/tabs/cars');
    console.log('clicked');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(vehicleTypeId)
      }
    };
    this.router.navigate(['/home/tabs/cars'], navigationExtras);
  }
  goToViewRequest() {
    this.navCtrl.navigateRoot('home/tabs/view-request');
  }
  goAddVehicle() {
    this.navCtrl.navigateRoot('/my-vehicles');
  }
}
