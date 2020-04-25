import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController,AlertController } from '@ionic/angular';
import { PasswordService } from './create-passwordservice'
import { Storage } from '@ionic/storage';
import {CustomValidators} from './password-validators';
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.html',
  styleUrls: ['./create-password.scss'],
})
export class CreatePasswordPage implements OnInit {
  public onCreatePasswordForm: FormGroup;
  isTextFieldType: boolean;
  incorrectpassword : boolean
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public PasswordService:PasswordService,
    public Storage:Storage
  
  ) { }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onCreatePasswordForm = this.formBuilder.group({
      'createpassword': [
        null,
        Validators.compose([
          Validators.required,
          // check whether the entered password has a number
          CustomValidators.patternValidator(/\d/, {
            hasNumber: true
          }),
          // check whether the entered password has upper case letter
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true
          }),
          // check whether the entered password has a lower case letter
          CustomValidators.patternValidator(/[a-z]/, {
            hasSmallCase: true
          }),
          // check whether the entered password has a special character
          CustomValidators.patternValidator(
            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            {
              hasSpecialCharacters: true
            }
          ),
          Validators.minLength(8)
        ])
      ],

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

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home/tabs/home-results');
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  goToHome() {
    
    var crp =this.onCreatePasswordForm.value.createpassword;
    var cp = this.onCreatePasswordForm.value.confirmpassword;

    if (crp !== cp) {
      this.incorrectpassword = true;     
    }
    else{
      this.incorrectpassword = false;
    console.log(crp,cp);

  this.Storage.get('mobilenumber').then((val) => {
    console.log('Your mobilenumber is', val);    
 var mobilenumber = val;
 this.PasswordService.get(crp,mobilenumber)
 .subscribe(      
  (response) => {                    
  if (response.status == true ){          
     this.incorrectpassword = false;
      console.log(response);
    this.navCtrl.navigateRoot('/home');
    this.welcomeAlert();
  }       
  else {
    this.incorrectpassword = true;  
      console.log(response + "the error is " + response.status);          
  }      
},       
  function(error) { 
    console.log("Error happened" + error)         
  },  

  );
});
  
}
}
}
