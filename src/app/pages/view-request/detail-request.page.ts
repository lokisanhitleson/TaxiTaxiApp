import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IonSlides, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { viewRequestsService } from './view-request.service';
import { ToastService } from '../services/toast.service';
import { NavController } from "@ionic/angular";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { viewRequests } from '../models/view-request.model';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.page.html',
  styleUrls: ['./detail-request.page.scss'],
})
export class DetailRequestPage implements OnInit {
  paramSubscription: Subscription;
  public onlineOffline = navigator.onLine;
  errorMessage:string;
  request: viewRequests;
  constructor(
    private _location: Location, 
    public navCtrl: NavController,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule,
    private route: ActivatedRoute,    
    private viewRequestsService: viewRequestsService,
    private toast: ToastService
    ) {
      
      document.addEventListener('online', () => { this.onlineOffline = true; });
      document.addEventListener('offline', () => { this.onlineOffline = false; });
  
      this.paramSubscription = this.route.params.subscribe(
        (params: Params) => {
          if (this.onlineOffline) {
            this.getDetailRequests(params['vehicleRequestId']);
            this.updateDetailRequests(params['vehicleRequestId']);
          } else {
            this.toast.showToast('No Internet Connection');
          }
        });
     }
     getDetailRequests(id: number) {
      return new Promise((resolve, reject) => {
       
        this.errorMessage = undefined;
        this.viewRequestsService.getRequestsById(id).subscribe(data => {
          if (data && data.status === 'SUCCESS') {
             this.request = data.data;     
             console.log(this.request.source);
                   
            } else {
            this.errorMessage = 'Failed to load data';
            this.request = undefined;
          }
          resolve(1);
        }, error => {
          console.log(error);
          this.errorMessage = <any>error;
          this.request = undefined;
          reject(error);
        });
      });
    }
    updateDetailRequests(id: number) {
      return new Promise((resolve, reject) => {
       
        this.errorMessage = undefined;
        this.viewRequestsService.updateDetailRequests(id).subscribe(data => {
          if (data && data.status === 'SUCCESS') {         
                   
            } else {
            this.errorMessage = 'Failed to load data';
            this.request = undefined;
          }
          resolve(1);
        }, error => {
          console.log(error);
          this.errorMessage = <any>error;
          this.request = undefined;
          reject(error);
        });
      });
    }
  // request =[
  //   {
  //   agentname:"R.Satheesh Kumar",
  //   location:"Chennai",
  //   mobilenumber:"9884420042",
  //   vehiclename:"Tata Indica",
  //   vehicletype:"Prime",
  //   from:"Tambaram",
  //   to:"Chengalpattu",
  //   time:"10 mins ago",
  //   description:"Need a 4 seater vehicle urgently for 3 days please contact me if you have any.."
  // }
  // ];

  ngOnInit() {
  }
  previous() 
  { 
    this._location.back(); 
  
  }

}
