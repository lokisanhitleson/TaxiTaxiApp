import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

pages = [
  {
        title: 'SIDE_MENU_ITEMS.HOME',
        url: '/home/tabs/home-results',
        direct: 'root',
        icon: 'icon-home'
      },
      {
        title: 'SIDE_MENU_ITEMS.MY_VEHICLES',
        url: '/my-vehicle-list',
        direct: 'forward',
        icon: 'icon-steering-wheel'
      },
      {
        title: 'SIDE_MENU_ITEMS.ASK_VEHICLE',
        url: '/home/tabs/request-vehicle',
        direct: 'forward',
        icon: 'icon-car-front'
      },
      {
        title: 'SIDE_MENU_ITEMS.VIEW_REQUEST',
        url: '/home/tabs/view-request',
        direct: 'forward',
        icon: 'icon-bell'
      },
      {
        title: 'SIDE_MENU_ITEMS.APP_SETTINGS',
        url: '/home/tabs/home-results',
        direct: 'forward',
        icon: 'icon-cog'
      },
      {
        title: 'SIDE_MENU_ITEMS.HELP_MENU',
        url: '/home/tabs/home-results',
        direct: 'forward',
        icon: 'icon-help'
      },
      {
        title: 'SIDE_MENU_ITEMS.SIGN_OUT',
        url: '/login',
        direct: 'forward',
        icon: 'icon-exit'
      },
  {
    title:'COMMON.LANGUAGES',
    children: [
      {
        title:'English',
          value:'en'
      },
      {
        title:'தமிழ்',
          value:'ta'
      }
    ]
  }
]

lang:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule
  ) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.initializeApp();
  }
  switchLanguage() {
    this.translate.use(this.lang);
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
