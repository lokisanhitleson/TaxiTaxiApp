import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { LoginService } from './login.service';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../sharedService/shared.service';
import { Storage } from '@ionic/storage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  isTextFieldType: boolean;
  invalidpassword: boolean;
  exist: boolean;

  mobileNumErr: boolean;
  activeErr: boolean;
  passwordErr: boolean;
  formSubmitted: boolean;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private sharedService: SharedService,
    private storage: Storage,
    private authService: AuthService,
    public translate: TranslateService,
    public translateModule: TranslateModule
  ) {

    this.menuCtrl.enable(false);
    this.authService.isLoggedIn().then(x => {
      if (x) {
        this.navCtrl.navigateRoot('/home/tabs/home-results');
      }
    });
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'mobileNum': [null, Validators.compose([
        Validators.required
        // Validators.pattern(/^[789]\d{9}$/)
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])],
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter registered mobile number to reset password.',
      cssClass: 'forgotPasswordAlert',
      inputs: [
        {
          name: 'mobileNum',
          type: 'tel',
          placeholder: 'Enter Mobile Number'
          // this.ismobbilenumberunique.bind(this)
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
          cssClass: 'primary',
          handler: value => {
            this.loginService.CheckExists({ value: value.mobileNum }).subscribe(data => {
              if (!data || (data && (data.status !== 'SUCCESS' || data.data.length < 1))) {
                this.toastCtrl.create({
                  message: 'Mobile number not registered!',
                  duration: 3000,
                  position: 'bottom'
                }).then(toast => toast.present());
              } else {
                const mobileNumber = value.mobileNum;
                this.storage.set('forgetPassNum', mobileNumber);
                this.storage.set('accountid', data.data[0].accountId);
                this.loginService.forgetpassword(mobileNumber)
                  .subscribe(
                    d => {
                      if (d && d.status === 'SUCCESS') {
                        this.navCtrl.navigateRoot('/otp');
                      }
                    });
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  typeChange(field: string) {
    if (field === 'mobileNum') {
      this.mobileNumErr = false;
      this.activeErr = false;
    }
    this.passwordErr = false;
  }

  goToSignup() {
    this.navCtrl.navigateRoot('/signup');
  }
  goToHome() {

    this.formSubmitted = true;
    console.log(this.onLoginForm);
    if (this.onLoginForm.valid) {

      const loading = this.loadingCtrl.create();
      loading.then(l => l.present());
      const mobilenum = this.onLoginForm.value.mobileNum;
      const password = this.onLoginForm.value.password;
      console.log(mobilenum, password);

      this.authService.login(mobilenum, password)
        .subscribe(
          async (response) => {

            if (response && response.status === 'SUCCESS') {
              this.sharedService.changeAuthTokenCheck(response.data.accessToken);
              await this.storage.set('accessToken', response.data.accessToken);
              const authVal = await this.authService.isLoggedIn();
              this.loginService.userData().subscribe(async data => {
                if (response && response.status === 'SUCCESS') {
                  await this.storage.set('userData', data.data);
                  await this.storage.set('currentLocation', {
                    region: data.data.agencyRegion,
                    latitude: data.data.latitude,
                    longitude: data.data.longitude
                  });
                  this.sharedService.changeLoginCheck(authVal);
                  this.sharedService.changeProfileCheck(1);
                  loading.then(l => l.dismiss());
                  this.navCtrl.navigateRoot('/home/tabs/home-results');
                }
              });
              this.mobileNumErr = false;
              this.activeErr = false;
              this.passwordErr = false;
            } else {
              loading.then(l => l.dismiss());
              if (response) {
                if (response.data.username) {
                  this.mobileNumErr = true;
                } else if (response.data.signupFlag) {
                  this.partialSignupPrompt();
                } else if (response.data.activeFlag) {
                  this.activeErr = true;
                } else if (response.data.password) {
                  this.passwordErr = true;
                }
              } else {
                this.toastCtrl.create({
                  message: 'Connection failed! try again',
                  duration: 3000,
                  position: 'bottom'
                }).then(toast => toast.present());
              }
            }
          }, async err => {
            loading.then(l => l.dismiss());
            const toast = await this.toastCtrl.create({
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();

          }
        );
    }
  }
  async partialSignupPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Info!',
      message: 'Partial signup detected on this account! Please signup again.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.navCtrl.navigateRoot('/signup');
          }
        }
      ]
    });

    await alert.present();
  }

}
