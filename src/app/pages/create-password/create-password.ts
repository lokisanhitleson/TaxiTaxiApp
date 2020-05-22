import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { PasswordService } from './create-passwordservice'
import { Storage } from '@ionic/storage';
import { SharedService } from '../sharedService/shared.service';
import { AuthService } from '../services/auth.service';
import { CustomValidators } from './password-validators';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WelcomeModal } from './welcome-modal';
import { error } from 'util';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.html',
  styleUrls: ['./create-password.scss'],
})
export class CreatePasswordPage implements OnInit {
  public onCreatePasswordForm: FormGroup;
  isTextFieldType: boolean;
  incorrectpassword : boolean;
  formSubmitted:boolean;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public PasswordService:PasswordService,
    private sharedService: SharedService,
    private storage: Storage,
    private authService: AuthService,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {
  }

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
          //check whether the entered password has a number and6 charcterlong
          Validators.pattern(/(?=.*?)(?=.*?[a-z])(?=.*?[0-9])(?=.*?).{6,}/),
          // check whether the entered password has a number
          // CustomValidators.patternValidator(/\d/, {
          //   hasNumber: true
          // }),
          // check whether the entered password has upper case letter
          // CustomValidators.patternValidator(/[A-Z]/, {
          //   hasCapitalCase: true
          // }),
          // check whether the entered password has a lower case letter
          // CustomValidators.patternValidator(/[a-z]/, {
          //   hasSmallCase: true
          // }),
          // check whether the entered password has a special character
          // CustomValidators.patternValidator(
          //   /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          //   {
          //     hasSpecialCharacters: true
          //   }
          // ),
          Validators.minLength(6)
        ])
      ],

      'confirmpassword': [null, Validators.compose([
        Validators.required
      ])]
    });
  }
  passwordMissmatch() {
    this.incorrectpassword = false;
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
 
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }

  goToHome() {

    this.formSubmitted = true;
    console.log(this.onCreatePasswordForm);
    if (this.onCreatePasswordForm.invalid) {
        return;
    }

    var crp =this.onCreatePasswordForm.value.createpassword;
    var cp = this.onCreatePasswordForm.value.confirmpassword;

     if (crp !== cp) {
        this.incorrectpassword = true;     
      }
     else {
        const loading = this.loadingCtrl.create();
        loading.then( loading => loading.present());
        this.incorrectpassword = false;
        this.storage.get('accountid').then((val) => {//ionicstorage 
        console.log('Your accountid is', val);    
        var accountid = val;
        this.PasswordService.createpassword(crp,accountid)
          .subscribe(      
              async (response) => {            
                loading.then( loading => loading.dismiss());
                if (response && response.status == "SUCCESS" ){          
                  this.incorrectpassword = false;
                  this.storage.get('mobilenumber').then((mobilenumber) => {
                  this.authService.login(mobilenumber, cp)
                  .subscribe(
                    async (response) => {
                     if (response && response.status === "SUCCESS") {  
                        this.sharedService.changeAuthTokenCheck(response.data.accessToken);
                        await this.storage.set('accessToken', response.data.accessToken);
                        const authVal = await this.authService.isLoggedIn();
                        this.PasswordService.userData().subscribe( async data => {           
                          if (response && response.status === "SUCCESS") {
                           await this.storage.set('userData', data.data);      
                           this.sharedService.changeLoginCheck(authVal);                      
                          }
                        });     
                        const fogotPasswordNumber = await this.storage.get('forgetPassNum');
                        if(!fogotPasswordNumber){
                          this.openWelcomeModal();
                        } else {
                          this.storage.remove('forgetPassNum'); 
                      } 
                    }  
                    this.navCtrl.navigateRoot('/home');            
                 }
                );              
            });
              }
                else {
                  this.incorrectpassword = true;   
                  if(!response) {
                    let toast = await this.toastCtrl.create({
                      showCloseButton: true,
                      message: 'Connection failed! try again',
                      duration: 3000,
                      position: 'bottom'
                    });   
                    toast.present();  
                  }
                }      
              },       
              (error) => { 
                loading.then( loading => loading.dismiss());
                this.toastCtrl.create({
                  showCloseButton: true,
                  message: 'Connection failed! try again',
                  duration: 3000,
                  position: 'bottom'
                }).then(toast => toast.present());
            },  
          );
      });  
    }
  }
}
