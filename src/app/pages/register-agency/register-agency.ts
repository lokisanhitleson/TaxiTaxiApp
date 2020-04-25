import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController,AlertController } from '@ionic/angular';
import {RegisterService} from "./register.service";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.html',
  styleUrls: ['./register-agency.scss'],
})
export class RegisterAgencyPage implements OnInit {
  public onAgencyRegistrationForm: FormGroup;
 
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public RegisterService:RegisterService,
    public Storage:Storage
  ) { }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onAgencyRegistrationForm = this.formBuilder.group({
      'agencyName': [null, Validators.compose([
        Validators.required
      ])],
      'agencyRegNum': [null, Validators.compose([
        Validators.required
      ])],
      'region': [null, Validators.compose([
        Validators.required
      ])],
      'contactName': [null, Validators.compose([
        Validators.required
      ])],
      'age': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]*$/)
      ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      ])],
      't&c': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  goToCreatePassword() {
    // this.navCtrl.navigateRoot('/create-password');
    this.Storage.get('mobilenumber').then((val) => {
      console.log('Your mobilenumber is', val);
     
   var mobileNumber = val;
   

   var AgencyName = this.onAgencyRegistrationForm.value.agencyName;
   var AgencyRegisterationNumber = this.onAgencyRegistrationForm.value.agencyRegNum;
   var ContactName = this.onAgencyRegistrationForm.value.contactName;
   var Age = this.onAgencyRegistrationForm.value.age;
   var Region = this.onAgencyRegistrationForm.value.region;
   var email = this.onAgencyRegistrationForm.value.email;


   console.log(mobileNumber,AgencyName,AgencyRegisterationNumber,ContactName,Age,Region,email);
    
    this.RegisterService.get(mobileNumber,AgencyName,AgencyRegisterationNumber,ContactName,Age,Region,email)
    
    .subscribe(      
      (response) => {             
      if (response.status ==true ){
        this.navCtrl.navigateRoot('/create-password');
        console.log(response);
         
      }     
      else {
      
         console.log(response);

       
      }
     // var nextpage= this.navCtrl.navigateRoot('/home');    
     
    },       
      function(error) { 
        console.log("Error happened" + error)         
    },       
     );
  });

  }
}
