import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController,AlertController, ToastController, ModalController } from '@ionic/angular';
import {RegisterService} from "./register.service";
import { Storage } from '@ionic/storage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SelectRegionModal } from '../select-region/select-region';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.html',
  styleUrls: ['./register-agency.scss'],
})
export class RegisterAgencyPage implements OnInit {
  public onAgencyRegistrationForm: FormGroup;
  formSubmitted :boolean;
  region: string;
  placeId: string;
  regionOpened :boolean;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public RegisterService:RegisterService,
    public Storage:Storage,
    public translate: TranslateService, 
    public toastCtrl: ToastController,
    public TranslateModule: TranslateModule,
    private modalCtrl: ModalController
  ) { }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onAgencyRegistrationForm = this.formBuilder.group({
      'agencyName': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([\w\-][a-zA-Z0-9_ ]{0,30})$/)
      ])],
      'agencyRegNum': [null, Validators.compose([
        Validators.pattern(/^[a-zA-Z0-9]{0,30}$/)
      ])],
      'contactName': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([\w\-][a-zA-Z0-9_ ]{0,30})$/)
      ])],
      // 'age': [null, Validators.compose([
      //   Validators.required,
      //   Validators.pattern(/^[0-9]*$/)
      // ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      ])]
    });
  }
  async openSelectRegion() {
    const modal = await this.modalCtrl.create({
      component: SelectRegionModal,
      componentProps: {
        "key": "val"
      }
    });

    modal.onWillDismiss().then((data) => {
      if(data.data) {
        this.region = data.data.placeName;
        this.placeId = data.data.placeId;
      }
      this.regionOpened = true;
    });
    return await modal.present();
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  goToCreatePassword() {
    this.formSubmitted = true;
   console.log(this.onAgencyRegistrationForm);
    if (this.onAgencyRegistrationForm.invalid || !this.placeId) {
        return;
    }   
    const loading = this.loadingCtrl.create();
    loading.then( loading => loading.present());
    this.Storage.get('accountid').then((val) => {
      console.log('Your accountid is', val);    
      var AgencyName = this.onAgencyRegistrationForm.value.agencyName;
      var AgencyRegisterationNumber = this.onAgencyRegistrationForm.value.agencyRegNum;
      var ContactName = this.onAgencyRegistrationForm.value.contactName;  
      var Region = this.region;
      let placeId = this.placeId;
      var email = this.onAgencyRegistrationForm.value.email;
      var accountid = val;
      this.RegisterService.registeragency(AgencyName,AgencyRegisterationNumber,ContactName,Region,placeId,email,accountid)
      .subscribe(      
        (response) => { 
          loading.then( loading => loading.dismiss());         
        if (response && response.status =="SUCCESS" ){
          this.navCtrl.navigateRoot('/create-password');
          console.log(response);    
        }  else {
          
          if(!response)
          this.toastCtrl.create({
            message: 'Connection failed! try again',
            duration: 3000,
            position: 'bottom'
          }).then(toast => toast.present())  
        }           
      },   err => {
        loading.then( loading => loading.dismiss());
        this.toastCtrl.create({
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      }).then(toast => toast.present()) 
    }
      );
    });
  }
}
