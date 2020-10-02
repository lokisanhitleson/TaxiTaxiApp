import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { NavController, LoadingController, ModalController, IonInfiniteScroll, AlertController } from '@ionic/angular';
import { viewRequestsService } from './view-request.service';
import { ToastService } from '../services/toast.service';
import { MyVehicleViewService } from '../my-vehicle-view/my-vehicle-view.service';
import { Router } from '@angular/router';
import { viewRequests } from '../models/view-request.model';
import { SharedService } from '../sharedService/shared.service';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.page.html',
  styleUrls: ['./view-request.page.scss'],
})
export class ViewRequestPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public onlineOffline = navigator.onLine;
  newData: [viewRequests];
  oldrequests: [viewRequests];
  errorMessage: string;
  page: number;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  constructor(
    private _location: Location, 
    public navCtrl: NavController,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule,
    public loadingCtrl: LoadingController,
    private viewRequestsService: viewRequestsService,
    private myVehicleViewService: MyVehicleViewService,
    public modalCtrl: ModalController,
    private sharedService: SharedService,
    private toast: ToastService,
  
    private alertController: AlertController,
    public router: Router,

    ) { 
      document.addEventListener('online', () => { this.onlineOffline = true; });
      document.addEventListener('offline', () => { this.onlineOffline = false; });
      (async () => {
        if (this.onlineOffline) {

          await this.getMyRequests();
          await this.getOldMyRequests();
        } else {
          this.toast.showToast('No Internet Connection');
        }
      })();
    }

    getMyRequests() {
      return new Promise((resolve, reject) => {
        this.page = 1;
        this.errorMessage = undefined;
        this.viewRequestsService.getagencyNotifications({ page: this.page }).subscribe(data => {
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
    getOldMyRequests() {
      return new Promise((resolve, reject) => {
        this.page = 1;
        this.errorMessage = undefined;
        this.viewRequestsService.getolderagencyNotifications({ page: this.page }).subscribe(data => {
           
          if (data && data.status === 'SUCCESS') {
            this.oldrequests = data.data;
            this.perPage = data.perPage;
            this.totalData = data.totalCount;
            this.totalPage = data.totalPages;
            
          } else {
            this.errorMessage = 'Failed to load data';
            this.oldrequests = undefined;
          }
          resolve(1);
        }, error => {
          console.log(error);
          this.errorMessage = <any>error;
          this.oldrequests = undefined;
          reject(error);
        });
      });
    }
  
    loadMoreData(infiniteScroll) {
      this.page = this.page + 1;
      this.viewRequestsService.getolderagencyNotifications({ page: this.page })
        .subscribe(
          data => {
            console.log('Async operation has ended');
            infiniteScroll.target.complete();
            if (data && data.status === 'SUCCESS') {
              this.perPage = data.perPage;
              this.totalData = data.totalCount;
              this.totalPage = data.totalPages;
              this.oldrequests.push(...data.data);
              this.errorMessage = undefined;
              if (this.oldrequests.length >= this.totalData) {
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
      this.getMyRequests().then(data => {
        this.getOldMyRequests().then(data => {
          refresher.target.complete();
        }).catch(err => {
          refresher.target.complete();
        });
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


  // request =[
  //   {carname:"Indica",agentname:"R.Satheesh Kumar",location:"Chennai",description:"Need a 4 seater vehicle urgently", mobilenumber:"9884420042",icon:"mail", img:"assets/img/innova.jpg", time:"10 mins ago"},
  //   {carname:"Indica v2",agentname:"S.Mahalingam",location:"Avadi",description:"Need a 5 seater vehicle urgently", mobilenumber:"8754491205",icon:"mail", img:"assets/img/indica-v2.jpg",time:"20 mins ago"},
  //   {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",description:"Anyone have Tata Ace? ", mobilenumber:"8988756523",icon:"mail", img:"assets/img/xylo.jpg",time:"1 hour ago"},
  //   {carname:"Figo",agentname:"P.Yogaraj",location:"Porur",description:"I need a 4 seater vehicle",mobilenumber:"8798875679",icon:"mail", img:"assets/img/figo.jpg",time:"1 hour ago"},
  //   {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",description:"I want a honda city", mobilenumber:"998875659",icon:"mail", img:"assets/img/i10.jpg",time:"2 hours ago"},
  // ];

  // oldrequest =[
  //   {carname:"Toyota Innova",agentname:"R.Satheesh Kumar",location:"Chennai",description:"I need a 7 seater vehicle", mobilenumber:"9884420042",icon:"mail-open", img:"assets/img/innova.jpg"},
  //   {carname:"Indica v2",agentname:"S.Mahalingam",location:"Avadi",description:"Need a 5 seater vehicle urgently", mobilenumber:"8754491205",icon:"mail-open", img:"assets/img/indica-v2.jpg"},
  //   {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",description:"Anyone have Tata Ace? ", mobilenumber:"8988756523",icon:"mail-open", img:"assets/img/xylo.jpg"},
  //   {carname:"Ford Figo",agentname:"P.Yogaraj",location:"Porur",description:"I need a 4 seater vehicle", mobilenumber:"8798875679",icon:"mail-open", img:"assets/img/figo.jpg"},
  //   {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",description:"I want a honda city", mobilenumber:"998875659",icon:"mail-open", img:"assets/img/i10.jpg"},
  //   {carname:"Xylo",agentname:"A.Paneer Selvam",location:"Tambaram",description:"Anyone have Tata Ace? ", mobilenumber:"8988756523",icon:"mail-open", img:"assets/img/xylo.jpg"},
  //   {carname:"Ford Figo",agentname:"P.Yogaraj",location:"Porur",description:"I need a 4 seater vehicle", mobilenumber:"8798875679",icon:"mail-open", img:"assets/img/figo.jpg"},
  //   {carname:"Hyundai i10",agentname:"M.Rajesh Kumar",location:"T.Nagar",description:"I want a honda city", mobilenumber:"998875659",icon:"mail-open", img:"assets/img/i10.jpg"}
  // ];


  ngOnInit() {
  }
  previous() 
  { 
    this._location.back(); 
    this.sharedService.changeNotficaitonbellRefresh(1);
  }

  goToDetailReuest(id){
   // this.navCtrl.navigateRoot('/home/tabs/request-detail')
    this.router.navigate(['request-detail/', id]);
  }
}
