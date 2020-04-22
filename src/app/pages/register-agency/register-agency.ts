import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.html',
  styleUrls: ['./register-agency.scss'],
})
export class RegisterAgencyPage implements OnInit {
  public onAgencyRegistrationForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) { }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onAgencyRegistrationForm = this.formBuilder.group({
      'agencyName': [null, Validators.compose([
        Validators.required
      ])],
      'agencyRegNum': [null, Validators.compose([
        Validators.required
      ])],
      'region': [null, Validators.compose([
        Validators.required
      ])],
      'contactName': [null, Validators.compose([
        Validators.required
      ])],
      'age': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      't&c': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  goToCreatePassword() {
    this.navCtrl.navigateRoot('/create-password');
  }
}
