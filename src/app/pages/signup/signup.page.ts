import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {SignUpService} from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public onSignUpForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private SignUpService: SignUpService,
    private storage: Storage
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onSignUpForm = this.formBuilder.group({
      'mobileNumber': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^[789]\d{9}$/)
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter your mobile number to send a reset link password.',
      inputs: [
        {
          name: 'mobileNumber',
          type: 'text',
          placeholder: 'Enter your mobile number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'OTP was sent successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToOtp() {
    var mobileNumber =this.onSignUpForm.value.mobileNumber;
    
    console.log(mobileNumber);
    
    this.storage.set('mobilenumber', mobileNumber);
    
    this.SignUpService.get(mobileNumber)    
     .subscribe(      
      (response) => { 
        // console.log( response)
        // console.log(response.status);
      if (response.status = true){
    
        this.navCtrl.navigateRoot('/otp');   
    
      }
      else {
        
        console.log("error");
    
      }
    },       
      function(error) { 
    
        console.log("Error happened" + error)         
    
     }, 
     );
    }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home/tabs/home-results');
  }

}
