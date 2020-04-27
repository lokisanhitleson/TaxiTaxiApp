import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController,AlertController, ModalController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WelcomeModal } from './welcome-modal';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.html',
  styleUrls: ['./create-password.scss'],
})
export class CreatePasswordPage implements OnInit {
  public onCreatePasswordForm: FormGroup;
  isTextFieldType: boolean;
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule,
    public modalCtrl: ModalController,
  ) { }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onCreatePasswordForm = this.formBuilder.group({
      'createpassword': [null, Validators.compose([
        Validators.required
      ])],
      'confirmpassword': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async welcomeAlert() {
    const alert = await this.alertController.create({
      header: 'Welcome!',
      subHeader: 'Get ride in seconds',
      cssClass:'welcomeAlert',
      message: 'Thank You!!! We are super excited to have you on board!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async openWelcomeModal() {
    const modal = await this.modalCtrl.create({
      component: WelcomeModal,
      componentProps: {
        "Title": "Welcome"
      }
    });
 
    modal.onDidDismiss();
    return await modal.present();
  }


  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home/tabs/home-results');
    });
  }

  
  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }

  goToHome() {
    this.openWelcomeModal();
    this.navCtrl.navigateRoot('/home');
  }
}
