import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  isTextFieldType: boolean;
  invalidpassword : boolean
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private loginService: LoginService
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
        Validators.required,
        Validators.pattern(/^[789]\d{9}$/)
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
                message: 'Verfication SMS sent to your mobile number.',
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

 
  goToSignup() {
    this.navCtrl.navigateRoot('/signup');
  }
  goToHome() {    
    var mobilenum =this.onLoginForm.value.mobileNum;
    var password = this.onLoginForm.value.password;
     console.log(mobilenum,password );

     this.loginService.get(mobilenum,password)  
     .subscribe(      
      (response) => { 
       
     if (response.status = true){
            console.log("error");            
           this.invalidpassword = true;
     }
     else {
      this.invalidpassword = false;
      console.log("true");
      // this.navCtrl.navigateRoot('/home/tabs/home-results');
       }      
     },       
     );
  }

}
