import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OtpService } from './otp.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  public onLoginForm: FormGroup;
  showErr: boolean;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private OtpService:OtpService

  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.startTimer();
    this.onLoginForm = this.formBuilder.group({
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
  // // //
  goToRegisterAgency() {
    // this.navCtrl.navigateRoot('/register-agency');

    this.storage.get('mobilenumber').then((val) => {
      console.log('Your mobilenumber is', val);
     
   var mobilenumber = val;
   

   var OTP = this.onLoginForm.value.otp;

   console.log(OTP,mobilenumber);
    
    this.OtpService.get(OTP,mobilenumber)
    
    .subscribe(      
      (response) => {             
      if (response.status == "SUCCESS" ){
        this.navCtrl.navigateRoot('/register-agency');
        console.log(response);
          this.showErr = false;
      }     
      else {
      
         console.log(response + "the error is " + response.status);

         this.showErr = true ;
      }
     // var nextpage= this.navCtrl.navigateRoot('/home');    
     
    },       
      function(error) { 
        console.log("Error happened" + error)         
    },       
     );
  });
  }  
  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }
  ReSendOTP(){


  }

}
