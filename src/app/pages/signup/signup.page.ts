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
    public TranslateModule: TranslateModule
  ) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
   }

  public onSignUpForm: FormGroup;
  public onOtpForm: FormGroup;
  otp: number;
  showOtpComponent = true;
  @ViewChild('ngOtpInput') ngOtpInput: any;

  lang: any;
  showOtp = false;
  showErr: boolean;
  exist: boolean;
  otpresendmessage: boolean;
  accountcreated: string;
  resendOtpEnable: boolean;
  formSubmitted: boolean;

  // OTP timer model
  timeLeft = 10;
  interval;
  // OTP Input
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '100px',
      'height': '100px'
    }
  };
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
      ]), this.ismobbilenumberunique.bind(this) ],
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

  startTimer() {
  this.interval = setInterval(() => {
    if (this.timeLeft > 0) {
      this.timeLeft--;

    } else {
      this.pauseTimer();
      this.resendOtpEnable = true;
    }


  }, 1000);

}

pauseTimer() {
  clearInterval(this.interval);
}
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

  ismobbilenumberunique(control: FormGroup) {
    const q = new Promise((resolve, reject) => {
        setTimeout(() => {
            this.SignUpService.CheckExists({ value: control.value }).subscribe(data => {
                if (data && data.status != 'SUCCESS' || data.data[0] != null ) {
                    console.log({ 'ismobilenumber': true });
                    resolve({ 'ismobilenumber': true });
                    this.exist = true;
                    console.log('no');
                } else {
                    console.log(null + 's');
                    resolve(null);
                    this.exist = false;
                  }
            });
        }, 100);
    });
    return q;
  }

  goToOtp() {
    this.formSubmitted = true;
    console.log(this.onSignUpForm);
    if (this.onSignUpForm.invalid) {
        return;
    }
    this.showOtp = true;
    this.startTimer();
       const mobileNumber = this.onSignUpForm.value.mobileNumber;
       this.storage.set('mobilenumber', mobileNumber);
       this.SignUpService.createAccount(mobileNumber)
       .subscribe(
        data => {
            if (data && data.status == 'SUCCESS') {
                const accountid = data.data.accountId;
                this.storage.set('accountid', accountid);
                this.onSignUpForm.reset();
                Object.keys(this.onSignUpForm.controls).forEach(key => {
                    if (this.onSignUpForm.get(key).errors) {

                        this.onSignUpForm.get(key).errors.required = false;
                    }
                });
                this.accountcreated  = '';
              } else {
                this.accountcreated = 'Account Creation Failed';
                if (!data) {
                  this.toastCtrl.create({
                    message: 'Connection failed! try again',
                    duration: 3000,
                    position: 'bottom'
                  }).then(toast => toast.present());
                }
            }
      },
       error => this.toastCtrl.create({
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      }).then(toast => toast.present())
    );
  }

  goToRegisterAgency() {
    this.formSubmitted = true;
        if (this.onOtpForm.invalid) {
        return;
    }
    const loading = this.loadingCtrl.create();
    loading.then( loading => loading.present());
    this.storage.get('mobilenumber').then((val) => {
      console.log('Your mobilenumber is', val);
      const mobilenumber = val;
      const OTP = this.otp;
      this.SignUpService.otpauth(OTP, val)
      .subscribe(
          (data) => {
            loading.then( loading => loading.dismiss());
          if (data && data.status == 'SUCCESS' ) {
            this.navCtrl.navigateRoot('/register-agency');
              this.showErr = false;
      } else {
             this.showErr = true ;
             if (!data) {
               this.toastCtrl.create({
                 message: 'Connection failed! try again',
                 duration: 3000,
                 position: 'bottom'
               }).then(toast => toast.present());
             }
      }},  err => {
        loading.then( loading => loading.dismiss());
        this.toastCtrl.create({
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      }).then(toast => toast.present());
    }
    );
  });
  }

  resend() {
    this.timeLeft = 10;
    this.startTimer();
    this.resendOtpEnable = false;
    console.log ('otpresend starts');
    this.storage.get('mobilenumber').then((val) => {
    console.log('Your mobilenumber is', val);
       const resendOtpNumber = val;
      this.SignUpService.otpresend(resendOtpNumber)
      .subscribe(
       (response) => {
     if (response && response.status == 'SUCCESS' ) {
       this.otpresendmessage = true;
     } else {
          this.showErr = false ;
     }
   },
     function(error) {
       console.log('Error happened' + error);
   }, );
 }); }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home/tabs/home-results');
  }
}
