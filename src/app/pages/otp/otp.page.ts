import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OtpService } from './otp.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  public onOtpForm: FormGroup;
  resendOtpEnable:boolean;
  showErr: boolean;
  otp: number;
  showOtpComponent = true;
  @ViewChild('ngOtpInput') ngOtpInput: any;
  lang:any;
  showOtp: boolean = true;
  otpresendmessage: boolean;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private OtpService: OtpService,
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
    this.startTimer();
    this.onOtpForm = this.formBuilder.group({
      'otp': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter your mobile number to send a reset link password.',
      inputs: [
        {
          name: 'otp',
          type: 'text',
          placeholder: 'One Time Password'
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

timeLeft: number = 10;
  interval;

  startTimer() {
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
     
    } else {
      this.pauseTimer();
      this.resendOtpEnable= true
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

goToCreatePassword() {
  console.log("click")
  this.startTimer();
   this.storage.get('mobilenumber').then((val) => {
  console.log('Your mobilenumber is', val);     
    var mobilenumber = val;
    var OTP = this.otp;
  this.OtpService.otpauth(OTP,mobilenumber)
  .subscribe(      
    (data) => {             
    if (data && data.status == "SUCCESS" ){
      this.navCtrl.navigateRoot('/register-agency');           
        this.showErr = false;
}     
else {       
       this.showErr = true ;
}},       
);  
});
}
resend(){
  this.timeLeft= 10;
  this.startTimer();
  this.resendOtpEnable= false;
  console.log ("otpresend starts")
  this.storage.get('mobilenumber').then((val) => {
  console.log('Your mobilenumber is', val);
     var resendOtpNumber = val;     
    this.OtpService.otpresend(resendOtpNumber)
    .subscribe(      
     (response) => {             
   if (response &&response.status == "SUCCESS" ){
     this.otpresendmessage = true        
   }     
   else {     
        this.showErr = false ;
   }      
 },       
   function(error) { 
     console.log("Error happened" + error)         
 },);
});}

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }
  ReSendOTP(){


  }

}
