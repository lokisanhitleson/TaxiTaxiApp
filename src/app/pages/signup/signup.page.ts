import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SignUpService } from './signup.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public onSignUpForm: FormGroup;
  public onOtpForm: FormGroup;
  otp: number;
  showOtpComponent = true;
  @ViewChild('ngOtpInput') ngOtpInput: any;

  lang:any;
  showOtp: boolean = false;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private SignUpService: SignUpService,
    private storage: Storage,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule
  ) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
   }
  switchLanguage() {
    this.translate.use(this.lang);
  }
  
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
    this.onOtpForm = this.formBuilder.group({
      'otp': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter your mobile number to send a secret code.',
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

  //OTP timer model
timeLeft: number = 120;
interval;

startTimer() {
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.timeLeft = 120;
    }
  },1000)
  
}

pauseTimer() {
  clearInterval(this.interval);
}
  //OTP Input
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder:'',
    inputStyles: {
      'width': '100px',
      'height': '100px'
    }
  };
  onOtpChange(otp) {
    this.otp = otp;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  goToOtp() {
    this.showOtp = true;
    this.startTimer();
    
    // RAM CODE
    /* var mobileNumber =this.onSignUpForm.value.mobileNumber;
    
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
     ); */
  }
   
  goToRegisterAgency() {
    this.navCtrl.navigateRoot('/register-agency');
  }
  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home/tabs/home-results');
  }

}
