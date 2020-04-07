import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'My Vehicles',
        url: '/my-vehicles',
        direct: 'forward',
        icon: 'information-circle-outline'
      },
      {
        title: 'Request Vehicle',
        url: '/request-vehicle',
        direct: 'forward',
        icon: 'ios-car'
      },
      {
        title: 'View Request',
        url: '/view-request',
        direct: 'forward',
        icon: 'notifications-outline'
      },
      {
        title: 'App Settings',
        url: '/home-results',
        direct: 'forward',
        icon: 'cog'
      },
      {
        title: 'Sign out',
        url: '/login',
        direct: 'forward',
        icon: 'log-out'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
