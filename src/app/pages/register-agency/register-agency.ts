import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController,AlertController, ToastController } from '@ionic/angular';
import {RegisterService} from "./register.service";
import { Storage } from '@ionic/storage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.html',
  styleUrls: ['./register-agency.scss'],
})
export class RegisterAgencyPage implements OnInit {
  public onAgencyRegistrationForm: FormGroup;
  formSubmitted :boolean;

  loading;

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
    public TranslateModule: TranslateModule
  ) {
    this.loading = this.loadingCtrl.create()
  }


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
      'region': [null, Validators.compose([
        Validators.required
      ])],
      'contactName': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([\w\-]{0,30})$/)
      ])],
      // 'age': [null, Validators.compose([
      //   Validators.required,
      //   Validators.pattern(/^[0-9]*$/)
      // ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      ])],
      't&c': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  goToCreatePassword() {
    this.formSubmitted = true;
   console.log(this.onAgencyRegistrationForm);
    if (this.onAgencyRegistrationForm.invalid) {
        return;
    }   
    this.loading.then( loading => loading.present());
    this.Storage.get('accountid').then((val) => {
      console.log('Your accountid is', val);    
      var AgencyName = this.onAgencyRegistrationForm.value.agencyName;
      var AgencyRegisterationNumber = this.onAgencyRegistrationForm.value.agencyRegNum;
      var ContactName = this.onAgencyRegistrationForm.value.contactName;  
      var Region = this.onAgencyRegistrationForm.value.region;
      var email = this.onAgencyRegistrationForm.value.email;
      var accountid = val[0];
      console.log(AgencyName,AgencyRegisterationNumber,ContactName,Region,email,accountid);
      this.RegisterService.registeragency(AgencyName,AgencyRegisterationNumber,ContactName,Region,email,accountid)
      .subscribe(      
        (response) => { 
          this.loading.then( loading => loading.dismiss());         
        if (response && response.status =="SUCCESS" ){
          this.navCtrl.navigateRoot('/create-password');
          console.log(response);    
        }  else {
          
          if(!response)
          this.toastCtrl.create({
            showCloseButton: true,
            message: 'Connection failed! try again',
            duration: 3000,
            position: 'bottom'
          }).then(toast => toast.present())  
        }           
      },   err => {
        this.loading.then( loading => loading.dismiss());
        this.toastCtrl.create({
        showCloseButton: true,
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      }).then(toast => toast.present()) 
    }
      );
    });
  }
}
