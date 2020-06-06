import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.page.html',
  styleUrls: ['./agent-profile.page.scss'],
})
export class AgentProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private _location: Location,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule
    ) { }


    agentInfo = [
      {label:"Date of Birth", value:"23-Mar-1988"},
      {label:"Address", value:"No 456, Gopalapuram,12th Street,Padi, Chennai"},
      {label:"Mobile Number", value:"+91 9956432187"},
      {label:"Email", value:"sath@gmail.com"},
      {label:"Agency Name", value:"S.A. Agency"},
      {label:"Agency Reg.No", value:"417/895"},
      {label:"Establishment on", value:"11/02/2016"},
      {label:"Agency Address", value:"No 23/45, CTH High Road, Padi"}
    ];


  ngOnInit() {
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home/home-results');
    });
  }
  previous() 
  { 
    this._location.back(); 
  }
}
