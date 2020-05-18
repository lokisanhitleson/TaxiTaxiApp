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
  invalidpassword : boolean;
  exist:boolean;

  mobileNumErr: boolean;
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
    public TranslateModule: TranslateModule
  ) {

    this.menuCtrl.enable(false);
    this.authService.isLoggedIn().then(x => {
      if(x)
        this.navCtrl.navigateRoot('/home/tabs/home-results');
    })
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
          type: 'number',
          placeholder: 'Enter Mobile Number'
           //this.ismobbilenumberunique.bind(this)
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
              if (!data || (data && (data.status != "SUCCESS" || data.data.length < 1 ))) {
                this.toastCtrl.create({
                  showCloseButton: true,
                  message: 'Mobile number not registered!',
                  duration: 3000,
                  position: 'bottom'
                }).then(toast => toast.present())  
                } 
              else {
                  var mobileNumber =value.mobileNum;
                  this.storage.set('forgetPassNum', mobileNumber);
                  this.storage.set('accountid', data.data[0].accountId);
                  this.loginService.forgetpassword(mobileNumber)
                  .subscribe(
                    data => {
                        if (data && data.status == "SUCCESS") {
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

  typeChange(field) {
    if (field === "mobileNum")
      this.mobileNumErr = false;
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
      loading.then(loading => loading.present());
      var mobilenum = this.onLoginForm.value.mobileNum;
      var password = this.onLoginForm.value.password;
      console.log(mobilenum, password);

      this.authService.login(mobilenum, password)
        .subscribe(
          async (response) => {

            if (response && response.status === "SUCCESS") {
              this.sharedService.changeAuthTokenCheck(response.data.accessToken);
              await this.storage.set('accessToken', response.data.accessToken);
              const authVal = await this.authService.isLoggedIn();
              this.sharedService.changeLoginCheck(authVal);
              this.mobileNumErr = false;
              this.passwordErr = false;
              loading.then(loading => loading.dismiss());
              this.navCtrl.navigateRoot('/home/tabs/home-results');
            } else {
              loading.then(loading => loading.dismiss());
              if (response) {
                if (response.data.username)
                  this.mobileNumErr = true;
                else if (response.data.password)
                  this.passwordErr = true;
              } else
                this.toastCtrl.create({
                  showCloseButton: true,
                  message: 'Connection failed! try again',
                  duration: 3000,
                  position: 'bottom'
                }).then(toast => toast.present());
            }
          }, async err => {
            loading.then(loading => loading.dismiss());
            let toast = await this.toastCtrl.create({
              showCloseButton: true,
              message: 'Connection failed! try again',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();

          }
        );
    }
  }


}
