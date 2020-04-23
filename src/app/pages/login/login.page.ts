import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  isTextFieldType: boolean;
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'mobileNum': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter registered mobile number to reset password.',
      cssClass:'forgotPasswordAlert',
      inputs: [
        {
          name: 'mobileNum',
          type: 'number',
          placeholder: 'Enter Mobile Number'
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
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
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

 //z
  goToSignup() {
    this.navCtrl.navigateRoot('/signup');
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home/tabs/home-results');
  }

}
